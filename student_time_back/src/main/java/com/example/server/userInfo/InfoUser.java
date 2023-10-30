package com.example.server.userInfo;

import com.example.server.user.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InfoUser {
  private String userEmail;
  private Role userRole;
}
