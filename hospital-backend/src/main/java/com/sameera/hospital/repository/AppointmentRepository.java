package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}