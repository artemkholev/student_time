package com.example.server.auth;

import jakarta.security.auth.message.AuthException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
@RequiredArgsConstructor
public class AuthenticationController {

  private final AuthenticationService service;

  // @PostMapping("/register")
  // public ResponseEntity<AuthenticationResponse> register(
  //   @RequestBody RegisterRequest request
  // ) {
  //   return ResponseEntity.ok(service.register(request));
  // }

  
  @PostMapping("/register")
  public void register(
      @RequestBody RegisterRequest request,
      HttpServletResponse response
  ) throws IOException {
    service.register(request, response);
  }

  @PostMapping("/authenticate")
  public ResponseEntity<AuthenticationResponse> authenticate(
      @RequestBody AuthenticationRequest request) throws AuthException {
    return ResponseEntity.ok(service.authenticate(request));
  }

  @PostMapping("/refresh")
  public void refreshToken(
      HttpServletRequest request,
      HttpServletResponse response) throws IOException {
    service.refreshToken(request, response);
  }
}