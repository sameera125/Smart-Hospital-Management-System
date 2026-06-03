package com.sameera.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sameera.hospital.entity.Doctor;
import com.sameera.hospital.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository repo;

    public Doctor saveDoctor(Doctor doctor) {
        return repo.save(doctor);
    }

    public List<Doctor> getAllDoctors() {
        return repo.findAll();
    }

    public Doctor getDoctor(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deleteDoctor(Long id) {
        repo.deleteById(id);
    }
}