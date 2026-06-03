package com.sameera.hospital.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.sameera.hospital.entity.MedicineOrder;

public interface MedicineOrderRepository extends JpaRepository<MedicineOrder, Long> {

    List<MedicineOrder> findByPatientId(Long patientId);
}