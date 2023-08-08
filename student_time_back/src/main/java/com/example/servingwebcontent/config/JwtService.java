package com.example.servingwebcontent.config;

import java.security.Key;
import java.util.function.Function;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
  private static final String SECRET_KEY = "s2Fgfi/3oQ2tCJK5lzgYyWtp5s/avQWIKvpMMAT38n0kUtlENUnqgiAmxEuzhtHE";


  public String extractUseremail(String token) {
    return null;
  }

  public <T> T extractClaim(String token, Function<Claims, T> ClaimsResolver) {
    final Claims claims = extractAllClaims(token);
    return ClaimsResolver.apply(claims);
  }

  private Claims extractAllClaims(String token) {
    return Jwts
        .parserBuilder()
        .setSigningKey(getSignInKey())
        .build()
        .parseClaimsJws(token)
        .getBody();
  }
  
  private Key getSignInKey() {
    byte keyBytes[] = Decoders.BASE64.decode(SECRET_KEY);
    return Keys.hmacShaKeyFor(keyBytes);
  } 
}
