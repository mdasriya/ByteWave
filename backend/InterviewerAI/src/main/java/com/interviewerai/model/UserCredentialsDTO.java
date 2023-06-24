package com.interviewerai.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCredentialsDTO {

	@Email(message = "Invalid User Email")
	private String UserEmail;
	
	@NotNull
	@NotBlank
	@NotEmpty
	@Size(min = 5, max = 15)
	private String Password;
}
