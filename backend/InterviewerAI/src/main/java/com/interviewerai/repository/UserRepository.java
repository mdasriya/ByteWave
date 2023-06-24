package com.interviewerai.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.interviewerai.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>,PagingAndSortingRepository<User, Integer>{

	public Optional<User> findByUserEmail(String email);
}
