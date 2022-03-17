package com.example.trabajos.controllers;

import com.example.trabajos.models.TrabajoModel;
import com.example.trabajos.services.TrabajoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/trabajo")
public class TrabajoController {
    @Autowired
    TrabajoService trabajoService;


    @GetMapping()
    public ArrayList<TrabajoModel> obtenerTrabajos(){
        return trabajoService.obtenerTrabajos();
    }

    @PostMapping()
    public TrabajoModel guardarTrabajo(@RequestBody TrabajoModel trabajo){
        return this.trabajoService.guardarTrabajo(trabajo);
    }

    @GetMapping(path = "/{id}")
    public Optional<TrabajoModel> obtenerTrabajoPorId(@PathVariable("id") Long id){
        return this.trabajoService.obtenerPorId(id);
    }


    @DeleteMapping(path = "/{id}")
    public String eliminarPorId(@PathVariable("id") Long id){
        boolean ok = this.trabajoService.eliminarTrabajo(id);
        if (ok) {
            return "Se eliminó el trabajo con id" + id;
        } else {
            return "No pudo eliminar el trabajo con id" + id;
        }
    }
}
