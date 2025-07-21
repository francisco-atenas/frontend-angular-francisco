package com.vaxi.spring_boot_microservice_1_inmueble.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name="inmueble")
public class Inmueble {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="nombre", length = 150, nullable = false)
    private String nombre;

    @Column(name = "direccion", length = 500, nullable = false)
    private String direccion;

    @Column(name = "foto", length = 1200, nullable = true)
    private String picture;

    @Column(name = "precio", nullable = false)
    private Double precio;

    @Column(name = "fecha_creacion", nullable = false)
    private LocalDateTime fechaCreacion;
}
