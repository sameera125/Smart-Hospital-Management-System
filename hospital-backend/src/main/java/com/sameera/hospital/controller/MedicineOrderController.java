package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.MedicineOrder;
import com.sameera.hospital.service.MedicineOrderService;

@RestController
@RequestMapping("/medicine-orders")
@CrossOrigin("*")
public class MedicineOrderController {

    @Autowired
    private MedicineOrderService service;

    @PostMapping
    public MedicineOrder saveOrder(@RequestBody MedicineOrder order) {
        return service.saveOrder(order);
    }

    @GetMapping
    public List<MedicineOrder> getAllOrders() {
        return service.getAllOrders();
    }

    @GetMapping("/patient/{patientId}")
    public List<MedicineOrder> getOrdersByPatient(@PathVariable Long patientId) {
        return service.getOrdersByPatient(patientId);
    }

    @PutMapping("/{id}")
    public MedicineOrder updateOrder(
            @PathVariable Long id,
            @RequestBody MedicineOrder order) {
        return service.updateOrder(id, order);
    }
}