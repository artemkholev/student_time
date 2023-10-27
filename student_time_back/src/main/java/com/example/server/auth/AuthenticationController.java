package com.example.server.auth;

import jakarta.security.auth.message.AuthException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;

@RestController
@RequestMapping("/auth")
// @CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;
  // private final LogoutService serviceLogout;

  @PostMapping("/register")
  public void registerUser(
      @RequestBody RegisterRequest request,
      HttpServletResponse response) throws IOException, AuthException {
    service.register(request, response);
  }

  @PostMapping("/authenticate")
  public void authenticateUser(
      @RequestBody AuthenticationRequest request,
      HttpServletResponse response
  ) throws IOException, AuthException {
    service.authenticate(request, response);
  }

  @PostMapping("/refresh")
  public void refreshTokenUser(
      HttpServletRequest request,
      HttpServletResponse response) throws IOException {
    service.refreshToken(request, response);
  }
  
  // @PostMapping("/logout")
  // public void logoutUser(
  //     HttpServletRequest request,
  //     HttpServletResponse response) throws IOException {
  //   serviceLogout.logout(request, response, null);
  // }
}