package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.DoctorLogin;

public interface DoctorLoginRepository extends JpaRepository<DoctorLogin, Long> {

    DoctorLogin findByEmailAndPassword(String email, String password);
}