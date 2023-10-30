package com.example.server.userInfo;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.server.user.Role;
import com.example.server.userInfo.UserInfoResponce;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoResponce {
    @JsonProperty("userEmail")
    private String userEmail;
    @JsonProperty("userRole")
    private Role userRole;
}