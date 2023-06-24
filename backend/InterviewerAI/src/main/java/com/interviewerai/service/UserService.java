package com.interviewerai.service;

import org.springframework.stereotype.Service;

import com.interviewerai.model.User;


public interface UserService {

	public User registerUser(User user);
	public User loginUser(String email, String password);
	
	
}
