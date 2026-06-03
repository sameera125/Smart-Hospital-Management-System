package com.sameera.hospital.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "doctor_login")
public class DoctorLogin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String password;
    private Long doctorId;

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

	public DoctorLogin(Long id, String email, String password, Long doctorId) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
		this.doctorId = doctorId;
	}

	public DoctorLogin() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "DoctorLogin [id=" + id + ", email=" + email + ", password=" + password + ", doctorId=" + doctorId + "]";
	}
    
}