package com.sameera.hospital.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sameera.hospital.entity.Appointment;
import com.sameera.hospital.repository.AppointmentRepository;

@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository repo;

    public Appointment saveAppointment(Appointment appointment) {
        return repo.save(appointment);
    }

    public List<Appointment> getAllAppointments() {
        return repo.findAll();
    }
    public void deleteAppointment(Long id) {
        repo.deleteById(id);
    }
}