package com.sameera.hospital.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sameera.hospital.entity.DoctorLogin;
import com.sameera.hospital.repository.DoctorLoginRepository;

@Service
public class DoctorLoginService {

    @Autowired
    private DoctorLoginRepository repo;

    public DoctorLogin login(String email, String password) {
        return repo.findByEmailAndPassword(email, password);
    }
}