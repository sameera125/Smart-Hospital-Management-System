package com.sameera.hospital.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="patients")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long patientId;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;

    private String mobile;

    private Integer age;

    private String gender;

    private String address;

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Patient(Long patientId, String name, String email, String password, String mobile, Integer age,
			String gender, String address) {
		super();
		this.patientId = patientId;
		this.name = name;
		this.email = email;
		this.password = password;
		this.mobile = mobile;
		this.age = age;
		this.gender = gender;
		this.address = address;
	}

	public Patient() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", name=" + name + ", email=" + email + ", password=" + password
				+ ", mobile=" + mobile + ", age=" + age + ", gender=" + gender + ", address=" + address + "]";
	}
    
    
}