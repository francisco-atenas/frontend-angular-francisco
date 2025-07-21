package com.vaxi.spring_boot_microservice_3_api_gateway.request;

import feign.auth.BasicAuthRequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FeignConfiguration {

    @Bean
    public BasicAuthRequestInterceptor basicAuthRequestInterceptor(
            @Value("${services.secutiry.secure-key-username}") String username,
            @Value("${services.secutiry.secure-key-password}") String password

    )
    {

        return new BasicAuthRequestInterceptor(username, password);
    }

}
