package com.project.hospitalmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.hospitalmanagement.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long>{

}
