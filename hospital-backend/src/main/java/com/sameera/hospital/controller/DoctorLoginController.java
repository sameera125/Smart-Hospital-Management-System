package com.sameera.hospital.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sameera.hospital.entity.DoctorLogin;
import com.sameera.hospital.service.DoctorLoginService;

@RestController
@RequestMapping("/doctor-auth")
@CrossOrigin("*")
public class DoctorLoginController {

    @Autowired
    private DoctorLoginService service;

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody DoctorLogin request) {

        DoctorLogin doctor =
                service.login(
                        request.getEmail(),
                        request.getPassword());

        if (doctor != null) {
            return ResponseEntity.ok(doctor);
        }

        return ResponseEntity
                .badRequest()
                .body("Invalid Doctor Credentials");
    }
}