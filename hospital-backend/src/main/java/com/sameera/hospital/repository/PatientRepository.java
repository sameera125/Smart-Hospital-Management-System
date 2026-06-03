package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long> {

}