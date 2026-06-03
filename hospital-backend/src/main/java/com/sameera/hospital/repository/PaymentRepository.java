package com.sameera.hospital.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}