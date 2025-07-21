package com.vaxi.spring_boot_microservice_1_inmueble.service;

import com.vaxi.spring_boot_microservice_1_inmueble.model.Inmueble;

import java.util.List;

public interface InmuebleService {
    Inmueble saveInmueble(Inmueble inmueble);

    void deleteInmueble(Long inmuebleId);

    List<Inmueble> findAllInmuebles();
}
