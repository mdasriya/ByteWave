package com.interviewerai.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.interviewerai.exception.UserException;
import com.interviewerai.model.User;
import com.interviewerai.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User registerUser(User user) {
		System.out.println("inside service");
		if(user==null)throw new UserException("User cannot be null");
		Optional<User> userOpt=userRepo.findByUserEmail(user.getUserEmail());
		if(userOpt.isPresent()) {
			throw new UserException("User with email "+user.getUserEmail()+" already present");
		}
		return userRepo.save(user);
	}

	@Override
	public User loginUser(String email, String password) {
		if(email==null || password==null)throw new UserException("Username or Password cannot be null");
		Optional<User> userOpt=userRepo.findByUserEmail(email);
		if(userOpt.isEmpty()) {
			throw new UserException("User with email "+email+" does not exist");
		}
		User res=userOpt.get();
		if(!res.getPassword().equals(password)) {
			throw new UserException("Invalid Password");
		}
		return res;
	}

}
