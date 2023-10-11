package com.example.server;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import static com.example.server.user.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.server.auth.AuthenticationService;
import com.example.server.auth.RegisterRequest;

@SpringBootApplication
public class SecurityApplication {
	private static Logger log = LoggerFactory.getLogger(SecurityApplication.class);

  public static void main(String[] args) {
		SpringApplication.run(SecurityApplication.class, args);
	}

	// @Bean
	// public CommandLineRunner commandLineRunner(
	// 		AuthenticationService service
	// ) {
	// 	return args -> {
	// 		var admin = RegisterRequest.builder()
	// 				.email("artemkholev@yandex.ru")
	// 				.password("password")
	// 				.role(ADMIN)
	// 				.build();
	// 		System.out.println("Admin token: " + service.register(admin).getAccessToken());
	// 	};
	// }
}
