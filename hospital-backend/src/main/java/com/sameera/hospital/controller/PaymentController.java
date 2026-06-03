package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Payment;
import com.sameera.hospital.repository.PaymentRepository;

@RestController
@RequestMapping("/payments")
@CrossOrigin("*")
public class PaymentController {

    @Autowired
    private PaymentRepository repo;

    @PostMapping
    public Payment savePayment(@RequestBody Payment payment) {
        return repo.save(payment);
    }

    @GetMapping
    public List<Payment> getPayments() {
        return repo.findAll();
    }

    @DeleteMapping("/{id}")
    public String deletePayment(@PathVariable Long id) {
        repo.deleteById(id);
        return "Payment Deleted";
    }
}