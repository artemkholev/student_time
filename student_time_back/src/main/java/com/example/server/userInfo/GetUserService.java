package com.example.server.userInfo;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import com.example.server.config.JwtService;
import com.example.server.user.UserRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GetUserService {
  private final UserRepository repository;
  private final JwtService jwtService;

  public void getInfo(
          HttpServletRequest request,
          HttpServletResponse response
  ) throws IOException {
    final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
    final String refreshToken;
    final String userEmail;
    if (authHeader == null || !authHeader.startsWith("Bearer ")) {
      System.out.println("Error");
      return;
    }
    refreshToken = authHeader.substring(7);
    userEmail = jwtService.extractUsername(refreshToken);
    if (userEmail != null) {
      var user = this.repository.findByEmail(userEmail)
          .orElseThrow();
      var UserResponse = UserInfoResponce.builder()
          .userEmail(user.getEmail())
          .userRole(user.getRole())
          .build();

      new ObjectMapper().writeValue(response.getOutputStream(), UserResponse);
    }
  }
}
