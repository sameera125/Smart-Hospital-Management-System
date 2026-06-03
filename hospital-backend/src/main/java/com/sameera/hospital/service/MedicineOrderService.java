package com.sameera.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sameera.hospital.entity.MedicineOrder;
import com.sameera.hospital.repository.MedicineOrderRepository;

@Service
public class MedicineOrderService {

    @Autowired
    private MedicineOrderRepository repo;

    public MedicineOrder saveOrder(MedicineOrder order) {
        return repo.save(order);
    }

    public List<MedicineOrder> getAllOrders() {
        return repo.findAll();
    }

    public List<MedicineOrder> getOrdersByPatient(Long patientId) {
        return repo.findByPatientId(patientId);
    }

    public MedicineOrder updateOrder(Long id, MedicineOrder order) {
        order.setOrderId(id);
        return repo.save(order);
    }
}