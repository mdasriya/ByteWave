import { useState } from 'react';
import { FormControl,Text, FormLabel, Input,Box, Button, Stack} from '@chakra-ui/react';
import {Link} from "react-router-dom"
import { useToast } from '@chakra-ui/react'


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const [name, setName] = useState("")
const toast = useToast()
 





const SubmitForm = async() =>{
    let userData = {
        name,email,password
       }
      
    await  fetch('https://interviewaibackend-production.up.railway.app/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((res) => {
           console.log(res);
           if(res.message==="Register user successfully"){
           toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 5000,
            isClosable: true,
             position: 'top',
          })}else{
            toast({
              title: 'User is Already Exists.',
              description: "Please Use Another Email Address",
              status: 'success',
              duration: 5000,
              isClosable: true,
               position: 'top',
            })
          }
          setName("")
          setEmail("")
          setPassword("")
        })
      
        .catch((error) => {
          console.error('Error submitting user response:', error);
         });
        
}
  
  return (
    <Box border={"gray.200"} height={"90vh"} backgroundColor="gray.200" pt={"50px"}>
      <Stack spacing={4} width={"30%"} margin={"auto"} border={"1px solid gray"} backgroundColor={"white"} padding={"30px"}>
        <Text fontSize={"30px"} as="b">SignUp Form </Text>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
             border={"1px solid gray"}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            border={"1px solid gray"}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            border={"1px solid gray"}
          />
        </FormControl>

        <Button type="submit" colorScheme="teal" mt={2} onClick={SubmitForm}>
          Sign up
        </Button>
        <Text >already have account?
          
           <Link to="/login" color='blue' style={{color:"blue", textDecoration:"underline"}}>
            login
           </Link>
            </Text>
      </Stack>
    </Box>
  );
};

export default SignupForm;