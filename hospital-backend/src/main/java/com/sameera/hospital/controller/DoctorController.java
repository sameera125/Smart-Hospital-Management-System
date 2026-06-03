package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Doctor;
import com.sameera.hospital.service.DoctorService;

@RestController
@RequestMapping("/doctors")
@CrossOrigin("*")
public class DoctorController {

    @Autowired
    private DoctorService service;

    @PostMapping
    public Doctor saveDoctor(@RequestBody Doctor doctor) {
        return service.saveDoctor(doctor);
    }

    @GetMapping
    public List<Doctor> getAllDoctors() {
        return service.getAllDoctors();
    }

    @GetMapping("/{id}")
    public Doctor getDoctor(@PathVariable Long id) {
        return service.getDoctor(id);
    }

    @DeleteMapping("/{id}")
    public String deleteDoctor(@PathVariable Long id) {
        service.deleteDoctor(id);
        return "Doctor Deleted Successfully";
    }
}