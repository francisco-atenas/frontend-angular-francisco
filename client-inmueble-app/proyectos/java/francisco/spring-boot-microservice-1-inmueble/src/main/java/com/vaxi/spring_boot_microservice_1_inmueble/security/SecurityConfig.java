package com.vaxi.spring_boot_microservice_1_inmueble.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher; // ¡Importación necesaria!

@EnableWebSecurity
@Configuration
public class SecurityConfig {

    @Value("${services.secutiry.secure-key-username}")
    private String SECURE_KEY_USERNAME;

    @Value("${services.secutiry.secure-key-password}")
    private String SECURE_KEY_PASSWORD;

    @Value("${services.secutiry.secure-key-username-2}")
    private String SECURE_KEY_USERNAME_2;

    @Value("${services.secutiry.secure-key-password-2}")
    private String SECURE_KEY_PASSWORD_2;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder authenticationManagerBuilder = http.getSharedObject(
                AuthenticationManagerBuilder.class
        );

        authenticationManagerBuilder.inMemoryAuthentication()
                .withUser(SECURE_KEY_USERNAME)
                .password(passwordEncoder().encode(SECURE_KEY_PASSWORD))
                .authorities(AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_ADMIN"))
                .and()
                .withUser(SECURE_KEY_USERNAME_2)
                .password(passwordEncoder().encode(SECURE_KEY_PASSWORD_2))
                .authorities(AuthorityUtils.commaSeparatedStringToAuthorityList("ROLE_DEV"));

        return http
                .csrf().disable()
                .httpBasic()
                .and()
                .authorizeHttpRequests(authz -> authz
                                // ¡CORREGIDO! Instanciar AntPathRequestMatcher directamente
                                .requestMatchers(new AntPathRequestMatcher("/**")).hasRole("ADMIN")
                        // La línea .anyRequest().authenticated() es redundante si todo requiere ADMIN
                        // Si necesitas otras reglas, las pondrías aquí antes de .anyRequest()
                )
                .build();
    }
}
