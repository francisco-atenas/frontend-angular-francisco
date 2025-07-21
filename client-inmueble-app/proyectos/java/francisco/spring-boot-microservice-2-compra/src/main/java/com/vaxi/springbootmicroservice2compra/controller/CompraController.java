package com.vaxi.springbootmicroservice2compra.controller;

import com.vaxi.springbootmicroservice2compra.model.Compra;
import com.vaxi.springbootmicroservice2compra.service.CompraService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/compra")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @PostMapping
    public ResponseEntity<?> saveCompra(@RequestBody Compra compra)
    {
        return new ResponseEntity<>(
                compraService.saveCompra(compra),
                HttpStatus.CREATED
                );
    }

    @GetMapping("{userId}")
    public ResponseEntity<?> getAllComprasOfUser(@PathVariable Long userId)
    {
        return ResponseEntity.ok(compraService.findAllComprasOfUser(userId));
    }


}
