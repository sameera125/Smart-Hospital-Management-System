package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
}