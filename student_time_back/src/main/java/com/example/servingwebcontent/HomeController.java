package com.example.servingwebcontent;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@GetMapping("/start")
  public String greeting (
            @RequestParam(required = false, defaultValue = "World")
            String name,
    Map<String, Object> model
  ) {
    model.put("name", name);
    return "start";
  }
}