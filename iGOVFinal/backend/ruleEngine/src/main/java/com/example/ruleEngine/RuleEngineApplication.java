package com.example.ruleEngine;

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
public class RuleEngineApplication {

	public static void main(String[] args) {
		SpringApplication.run(RuleEngineApplication.class, args);
	}

	@GetMapping(value = "rule1",  produces = "application/json")
    public Product rule1() {
		Product pdt = new Product("This is Rule1 - Backend","dfsdf","sdfgsdfgeg");
        return pdt;
	
    }

	@GetMapping(value = "rule2",  produces = "application/json")
    public Product rule2() {
		Product pdt = new Product("This is Rule2 - Backend","dfsdf","sdfgsdfgeg");
        return pdt;
	
    }

}
