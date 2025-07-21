package com.vaxi.spring_boot_microservice_1_inmueble.controller;

import com.vaxi.spring_boot_microservice_1_inmueble.model.Inmueble;
import com.vaxi.spring_boot_microservice_1_inmueble.service.InmuebleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/inmueble")
public class InmuebleController {

    @Autowired
    private InmuebleService inmuebleService;

    @PostMapping
    public ResponseEntity<?> saveInmueble(@RequestBody Inmueble inmueble)
    {
        return new ResponseEntity<>(
                inmuebleService.saveInmueble(inmueble),
                HttpStatus.CREATED
        );
    }

    @DeleteMapping("{inmuebleId}")
    public ResponseEntity<?> deleteInmueble(@PathVariable Long inmuebleId)
    {
        inmuebleService.deleteInmueble(inmuebleId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllInmuebles()
    {
        return ResponseEntity.ok(inmuebleService.findAllInmuebles());
    }
}
