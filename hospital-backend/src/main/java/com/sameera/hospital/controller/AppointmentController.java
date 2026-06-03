package com.sameera.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.Appointment;
import com.sameera.hospital.service.AppointmentService;

@RestController
@RequestMapping("/appointments")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    private AppointmentService service;

    @PostMapping
    public Appointment saveAppointment(@RequestBody Appointment appointment) {
        return service.saveAppointment(appointment);
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return service.getAllAppointments();
    }
    @DeleteMapping("/{id}")
    public String deleteAppointment(@PathVariable Long id) {
        service.deleteAppointment(id);
        return "Appointment Deleted Successfully";
    }
}