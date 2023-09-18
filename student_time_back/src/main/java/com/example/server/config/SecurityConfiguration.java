package com.example.server.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableMethodSecurity
public class SecurityConfiguration {

  // private final JwtAuthenticationFilter jwtAuthFilter;
  // private final AuthenticationProvider authenticationProvider;
  // private final LogoutHandler logoutHandler;

  // @Bean
  // public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
  //   http
  //       .csrf()
  //       .disable()
  //       .authorizeHttpRequests()
  //       .requestMatchers(
  //               "/auth/**",
  //               "/v2/api-docs",
  //               "/v3/api-docs",
  //               "/v3/api-docs/**",
  //               "/swagger-resources",
  //               "/swagger-resources/**",
  //               "/configuration/ui",
  //               "/configuration/security",
  //               "/swagger-ui/**",
  //               "/webjars/**",
  //               "/swagger-ui.html"
  //       )
  //       .permitAll()

  //       .requestMatchers("/management/**").hasAnyRole(ADMIN.name())

  //       .requestMatchers(GET, "/management/**").hasAnyAuthority(ADMIN_READ.name(), MANAGER_READ.name())
  //       .requestMatchers(POST, "/management/**").hasAnyAuthority(ADMIN_CREATE.name(), MANAGER_CREATE.name())
  //       .requestMatchers(PUT, "/management/**").hasAnyAuthority(ADMIN_UPDATE.name(), MANAGER_UPDATE.name())
  //       .requestMatchers(DELETE, "/management/**").hasAnyAuthority(ADMIN_DELETE.name(), MANAGER_DELETE.name())

  //      /* .requestMatchers("/api/v1/admin/**").hasRole(ADMIN.name())

  //       .requestMatchers(GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
  //       .requestMatchers(POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
  //       .requestMatchers(PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
  //       .requestMatchers(DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())*/

  //       .anyRequest()
  //       .authenticated()
  //       .and()
  //       .sessionManagement()
  //       .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
  //       .and()
  //       .authenticationProvider(authenticationProvider)
  //       .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
  //       .logout()
  //       .logoutUrl("/auth/logout")
  //       .addLogoutHandler(logoutHandler)
  //       .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
  //   ;

  //   return http.build();
  // }


    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;
    public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .httpBasic(basic -> basic.disable())
                .csrf(csrf -> csrf.disable())
                .sessionManagement(management -> management.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(
                        authz -> {
                          try {
                            authz
                          .requestMatchers("/auth/register", "/auth/authenticate").permitAll()
                          .anyRequest()
                          .authenticated()
                          .and()
                          .sessionManagement(management -> management
                                  .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                          .authenticationProvider(authenticationProvider)
                          .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                          .logout(logout -> logout
                                  .logoutUrl("/auth/logout")
                                  .addLogoutHandler(logoutHandler)
                                  .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext()));
                          } catch (Exception e) {
                            e.printStackTrace();
                          }
                        }
                ).build();
    }
  }
}