package com.example.servingwebcontent.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Auth {
  @Id
  // @GeneratedValue(strategy=GenerationType.AUTO)
  private String email;
  private String password;

  public Auth() {
  }

  public Auth(String email, String password) {
    this.email = email;
    this.password = password;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getEmail() {
    return email;
  }
  
  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return password;
  }
}