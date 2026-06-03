package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Consultation;
import com.sameera.hospital.repository.ConsultationRepository;

@RestController
@RequestMapping("/consultations")
@CrossOrigin("*")
public class ConsultationController {

    @Autowired
    private ConsultationRepository repo;

    @PostMapping
    public Consultation saveConsultation(@RequestBody Consultation consultation) {
        return repo.save(consultation);
    }

    @GetMapping
    public List<Consultation> getConsultations() {
        return repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String deleteConsultation(@PathVariable Long id) {
        repo.deleteById(id);
        return "Consultation Deleted";
    }
}