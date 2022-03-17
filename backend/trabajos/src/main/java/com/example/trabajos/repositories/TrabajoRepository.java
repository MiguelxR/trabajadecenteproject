package com.example.trabajos.repositories;

import com.example.trabajos.models.TrabajoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface TrabajoRepository extends CrudRepository<TrabajoModel, Long> {

}
