package com.vaxi.spring_boot_microservice_3_api_gateway.request;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient(value = "inmueble-service",
        path = "/api/inmueble",
        //url = "${inmueble.service.url}",
        configuration = FeignConfiguration.class
)
public interface InmuebleServiceRequest {

    @PostMapping
    Object saveInmueble(@RequestBody Object requestBody);

    @DeleteMapping("{inmuebleId}")
    void deleteInmueble(@PathVariable("inmuebleId") Long inmuebleId);

    @GetMapping()
    List<Object> getAllInmuebles();
}
