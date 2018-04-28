package me.sjwarner.bullhack2018;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Bullhack2018Application {

	private static final Logger log = LoggerFactory.getLogger(Bullhack2018Application.class);

	public static void main(String[] args) {
		SpringApplication.run(Bullhack2018Application.class);
	}
}
