package com.vaxi.spring_boot_microservice_1_inmueble.service;

import com.vaxi.spring_boot_microservice_1_inmueble.model.Inmueble;
import com.vaxi.spring_boot_microservice_1_inmueble.repository.InmuebleRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class InmuebleServiceImpl implements InmuebleService{

    private final InmuebleRepository inmuebleRepository;

    public InmuebleServiceImpl(InmuebleRepository inmuebleRepository) {
        this.inmuebleRepository = inmuebleRepository;
    }

    @Override
    public Inmueble saveInmueble(Inmueble inmueble)
    {
        inmueble.setFechaCreacion(LocalDateTime.now());
        return inmuebleRepository.save(inmueble);
    }

    @Override
    public void deleteInmueble(Long inmuebleId)
    {
        inmuebleRepository.deleteById(inmuebleId);
    }

    @Override
    public List<Inmueble> findAllInmuebles()
    {
        return inmuebleRepository.findAll();
    }
}
