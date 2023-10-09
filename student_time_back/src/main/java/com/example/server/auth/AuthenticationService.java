package com.example.server.auth;

import com.example.server.config.JwtService;
import com.example.server.token.Token;
import com.example.server.token.TokenRepository;
import com.example.server.token.TokenType;
import com.example.server.user.User;
import com.example.server.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.security.auth.message.AuthException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
  private final UserRepository repository;
  private final TokenRepository tokenRepository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;
  private final HttpServletResponse response;

  // public AuthenticationResponse register(RegisterRequest request) {
  //   var user = User.builder()
  //       .email(request.getEmail())
  //       .password(passwordEncoder.encode(request.getPassword()))
  //       .role(request.getRole())
  //       .build();
    
  //   var savedUser = repository.save(user);
  //   repository.findByEmail(request.getEmail()).orElseThrow();
  //   var jwtToken = jwtService.generateToken(user);
  //   var refreshToken = jwtService.generateRefreshToken(user);
  //   saveUserToken(savedUser, jwtToken);

  //   var userData = new AuthResponseUser(true, user.getRole());

  //   Cookie cookie = new Cookie("refreshToken", refreshToken);
  //   // response.addCookie(cookie);

  //   return AuthenticationResponse.builder()
  //       .accessToken(jwtToken)
  //       .userResponse(userData)
  //       .build();
  // }


  public void register(
            RegisterRequest request,
            HttpServletResponse response
  ) throws IOException {
    var user = User.builder()
      .email(request.getEmail())
      .password(passwordEncoder.encode(request.getPassword()))
      .role(request.getRole())
      .build();
  
      repository.findByEmail(request.getEmail()).orElseThrow();

    var savedUser = repository.save(user);
    var accessToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    saveUserToken(savedUser, accessToken);

    var userData = new AuthResponseUser(true, user.getRole());

    var authResponse = AuthenticationResponse.builder()
        .accessToken(accessToken)
        .userResponse(userData)
        .build();

    Cookie cookie = new Cookie("refreshToken", refreshToken);
    response.addCookie(cookie);
    new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
    response.setHeader("r", refreshToken);
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) throws AuthException {
    authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(
            request.getEmail(),
            request.getPassword()
        )
    );
    var user = repository.findByEmail(request.getEmail()).orElseThrow(() -> new AuthException("Пользователь не найден"));
    var jwtToken = jwtService.generateToken(user);
    var refreshToken = jwtService.generateRefreshToken(user);
    revokeAllUserTokens(user);
    saveUserToken(user, jwtToken);
    return AuthenticationResponse.builder()
        .accessToken(jwtToken)
        .build();
  }

  private void saveUserToken(User user, String jwtToken) {
    var token = Token.builder()
        .user(user)
        .token(jwtToken)
        .tokenType(TokenType.BEARER)
        .expired(false)
        .revoked(false)
        .build();
    tokenRepository.save(token);
  }

  private void revokeAllUserTokens(User user) {
    var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getId());
    if (validUserTokens.isEmpty())
      return;
    validUserTokens.forEach(token -> {
      token.setExpired(true);
      token.setRevoked(true);
    });
    tokenRepository.saveAll(validUserTokens);
  }

  public void refreshToken(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByEmail(userEmail)
              .orElseThrow();
      if (jwtService.isTokenValid(refreshToken, user)) {
        var accessToken = jwtService.generateToken(user);
        revokeAllUserTokens(user);
        saveUserToken(user, accessToken);
        var authResponse = AuthenticationResponse.builder()
                .accessToken(accessToken)
                .build();
        new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
        response.setHeader("r", refreshToken);
      }
    }
  }
}