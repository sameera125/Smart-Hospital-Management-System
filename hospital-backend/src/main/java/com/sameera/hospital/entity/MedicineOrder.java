package com.sameera.hospital.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "medicine_order")
public class MedicineOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    private Long patientId;
    private Long prescriptionId;
    private String medicineName;
    private Integer quantity;
    private Double amount;
    private String orderStatus;
    private String orderDate;

    public Long getOrderId() { return orderId; }
    public Long getPatientId() { return patientId; }
    public Long getPrescriptionId() { return prescriptionId; }
    public String getMedicineName() { return medicineName; }
    public Integer getQuantity() { return quantity; }
    public Double getAmount() { return amount; }
    public String getOrderStatus() { return orderStatus; }
    public String getOrderDate() { return orderDate; }

    public void setOrderId(Long orderId) { this.orderId = orderId; }
    public void setPatientId(Long patientId) { this.patientId = patientId; }
    public void setPrescriptionId(Long prescriptionId) { this.prescriptionId = prescriptionId; }
    public void setMedicineName(String medicineName) { this.medicineName = medicineName; }
    public void setQuantity(Integer quantity) { this.quantity = quantity; }
    public void setAmount(Double amount) { this.amount = amount; }
    public void setOrderStatus(String orderStatus) { this.orderStatus = orderStatus; }
    public void setOrderDate(String orderDate) { this.orderDate = orderDate; }
}