package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SecurityApplication {
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
