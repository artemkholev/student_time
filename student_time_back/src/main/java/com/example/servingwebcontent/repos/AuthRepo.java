package com.example.servingwebcontent.repos;

import org.springframework.data.repository.CrudRepository;
import com.example.servingwebcontent.domain.Auth;

public interface AuthRepo extends CrudRepository<Auth, Integer> {
  
}
