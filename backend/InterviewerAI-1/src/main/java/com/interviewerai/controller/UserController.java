package com.interviewerai.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.interviewerai.model.User;
import com.interviewerai.model.UserCredentialsDTO;
import com.interviewerai.service.UserService;
import com.interviewerai.service.UserServiceImpl;

import jakarta.validation.Valid;

@RestController
@RequestMapping("interviewer")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping("/register")
	public ResponseEntity<User> userRegistration(@Valid @RequestBody User user){
		System.out.println("inside register");
		return new ResponseEntity<>(userService.registerUser(user),HttpStatus.ACCEPTED);
	}
	
	@GetMapping("login")
	public ResponseEntity<User> userLogin(@Valid @RequestBody UserCredentialsDTO userCred){
		return new ResponseEntity<>(userService.loginUser(userCred.getUserEmail(),userCred.getPassword()),HttpStatus.ACCEPTED);
	}
	
	
}
