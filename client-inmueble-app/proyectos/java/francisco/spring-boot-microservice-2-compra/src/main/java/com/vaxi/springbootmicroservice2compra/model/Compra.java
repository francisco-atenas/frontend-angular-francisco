package com.vaxi.springbootmicroservice2compra.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name ="compra")
public class Compra {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @Column(name = "user_id", nullable = false)
   private Long userId;

   @Column(name = "inmueble_id", nullable = false)
   private Long inmuebleId;

   @Column(name = "titulo", nullable = false)
   private String titulo;

   @Column(name = "precio", nullable = false)
   private Double precio;

   @Column(name = "fecha_compra", nullable = false)
   private LocalDateTime fechaCompra;
}
