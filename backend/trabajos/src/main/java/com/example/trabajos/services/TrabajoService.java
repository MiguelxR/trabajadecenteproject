package com.example.trabajos.services;

import com.example.trabajos.models.TrabajoModel;
import com.example.trabajos.repositories.TrabajoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class TrabajoService {
    @Autowired
    TrabajoRepository trabajoRepository;

    public ArrayList<TrabajoModel> obtenerTrabajos(){
    return (ArrayList<TrabajoModel>) trabajoRepository.findAll();
    }

    public TrabajoModel guardarTrabajo(TrabajoModel trabajo){
        return trabajoRepository.save(trabajo);
    }

    public Optional<TrabajoModel> obtenerPorId(Long id){
        return trabajoRepository.findById(id);
    }


    public boolean eliminarTrabajo(Long id){
        try{
            trabajoRepository.deleteById(id);
            return true;
        }catch (Exception err){
            return false;
        }
    }
}
