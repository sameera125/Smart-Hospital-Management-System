package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Prescription;
import com.sameera.hospital.repository.PrescriptionRepository;

@RestController
@RequestMapping("/prescriptions")
@CrossOrigin("*")
public class PrescriptionController {

    @Autowired
    private PrescriptionRepository repo;

    @PostMapping
    public Prescription savePrescription(@RequestBody Prescription prescription) {
        return repo.save(prescription);
    }

    @GetMapping
    public List<Prescription> getPrescriptions() {
        return repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String deletePrescription(@PathVariable Long id) {
        repo.deleteById(id);
        return "Prescription Deleted";
    }
}