package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Consultation;

public interface ConsultationRepository extends JpaRepository<Consultation, Long> {
}