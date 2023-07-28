package com.example.servingwebcontent;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.servingwebcontent.domain.Auth;
import com.example.servingwebcontent.repos.AuthRepo;

@Controller
public class GreetingController {
  @Autowired
  private AuthRepo authRepo;

	@GetMapping("/hello")
  public String greeting (
    @RequestParam(name = "name", required = false, defaultValue = "World") 
    String name,
    Map<String, Object> model
  ) {
    model.put("name", name);
    return "hello";
  }

  @GetMapping
  public String main(Map<String, Object> model) {
    Iterable<Auth> info =  authRepo.findAll();
    model.put("info", info);
    return "main";
  }

  @PostMapping
  public String add(@RequestParam String email, @RequestParam String password, Map<String, Object> model) {
    Auth message = new Auth(email, password);
    authRepo.save(message);

    Iterable<Auth> info =  authRepo.findAll();
    model.put("info", info);
    return "main";
  }
}