package com.example.server.userInfo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
@RequiredArgsConstructor
public class UserController {

  // @GetMapping("/info")
  // public void registerUser(
  //     @RequestBody RegisterRequest request,
  //     HttpServletResponse response) throws IOException, AuthException {
  //   service.register(request, response);
  // }
}