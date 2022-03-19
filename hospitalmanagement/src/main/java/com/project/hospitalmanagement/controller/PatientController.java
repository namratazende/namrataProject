package com.project.hospitalmanagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.hospitalmanagement.model.Patient;
import com.project.hospitalmanagement.repository.PatientRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/")
public class PatientController 
{
	@Autowired
	private PatientRepository patientRepository;
	
	//get all patients
	@GetMapping("/patients")
	public List<Patient> getAllPatients()
	{
		return patientRepository.findAll();
	}
	
	
	@PostMapping("/patients")
	public Patient savePatientDetails(@RequestBody Patient patient)
	{
		return patientRepository.save(patient);
	}
	
	@PutMapping("/patients")
	public Patient updatePatient(@RequestBody Patient patient) {
		return patientRepository.save(patient);
	}
	
	@DeleteMapping("/patients/{id}")
	public ResponseEntity<HttpStatus> deletePatientById(@PathVariable Long id) {
		patientRepository.deleteById(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
