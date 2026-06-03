package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {

}