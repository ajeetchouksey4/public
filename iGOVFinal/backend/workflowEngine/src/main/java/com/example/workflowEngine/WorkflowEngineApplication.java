package com.example.workflowEngine;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin
public class WorkflowEngineApplication {

	public static void main(String[] args) {
		SpringApplication.run(WorkflowEngineApplication.class, args);
	}

	 
	@GetMapping(value = "work1",  produces = "application/json")
    public Product work1() {
		Product pdt = new Product("This is Workflow work1 Engine - Backend","dfsdf","sdfgsdfgeg");
        return pdt;
	
    }

	@GetMapping(value = "work2",  produces = "application/json")
    public Product work2() {
		Product pdt = new Product("This is Workflow work2 Engine - Backend","dfsdf","sdfgsdfgeg");
        return pdt;
	
    }

}
