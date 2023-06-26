import { Box, Button, Flex, Spacer,Alert,
  } from '@chakra-ui/react';

// import logo from "InterviewAI.png"
import { useNavigate } from 'react-router-dom';
import logo from "../logo.png"
import "./nav.css"
function Navbar() {
     const navigate = useNavigate()
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="gray.800"
      color="white"
   
   
    >
      <Box onClick={()=> navigate("/")} cursor={"pointer"}>
        {/* Replace the 'logo.png' URL with your actual logo image */}
        <img style={{width:"50px"}} src={logo} alt="Logo" height={24} />
      </Box>
      <Box onClick={()=> navigate("/")}>
        {/* <Box fontSize="lg" fontWeight="bold" cursor={"pointer"}>
          InterviewAI
        </Box> */}<div class="Glick_container">
  <div className="Glick_stack" style={{ '--stacks': 3 }}>
    <span style={{ '--index': 0 }}>InterviewAI</span>
    <span style={{ '--index': 1 }}>InterviewAI</span>
    <span style={{ '--index': 2 }}>InterviewAI</span>
  </div>
</div>

      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal" variant="outline" mr={2}
        onClick={()=> navigate("/Signup")}
        >
          Sign Up
        </Button>
        <Button colorScheme="teal" onClick={()=> navigate("/login")}>Login</Button>
      </Box>
    </Flex>
  );
}

export default Navbar;

