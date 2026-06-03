package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Patient;
import com.sameera.hospital.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin("*")
public class PatientController {

    @Autowired
    private PatientService service;

    @PostMapping
    public Patient savePatient(@RequestBody Patient patient) {
        return service.savePatient(patient);
    }

    @GetMapping
    public List<Patient> getAllPatients() {
        return service.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatient(@PathVariable Long id) {
        return service.getPatient(id);
    }

    @DeleteMapping("/{id}")
    public String deletePatient(@PathVariable Long id) {
        service.deletePatient(id);
        return "Patient Deleted Successfully";
    }
}