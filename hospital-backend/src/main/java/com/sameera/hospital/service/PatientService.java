package com.sameera.hospital.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sameera.hospital.entity.Patient;
import com.sameera.hospital.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository repo;

    public Patient savePatient(Patient patient) {
        return repo.save(patient);
    }

    public List<Patient> getAllPatients() {
        return repo.findAll();
    }

    public Patient getPatient(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deletePatient(Long id) {
        repo.deleteById(id);
    }
}