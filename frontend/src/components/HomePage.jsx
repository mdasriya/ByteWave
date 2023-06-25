import React from 'react'
import { Flex, Spacer, Box, Button, Image, GridItem, Text } from '@chakra-ui/react'
import test from "../onlinetest.png"
import { useNavigate } from 'react-router-dom'
import "./styled.css"
import Footer from './Footer'
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <Box>
    <Flex>
      <Box p='4' width={"60%"} height={"auto"}>
        <Image
          width={"100%"}
          objectFit='cover'
          src={test}
          alt='Dan Abramov'
        />
      </Box>
      <Spacer />
      <Box display={"flex"}  width={"40%"} textAlign={"left"} height={"auto"} alignItems={"center"}>

           
<Box  width={"100%"}>
        <Box justifyContent={"flex-start"} textAlign={"left"} display={"flex"}>
          <Text fontSize='4xl' as="b">Unlock Your Career Potential </Text> <br />
        </Box>
        <Box justifyContent={"flex-start"} textAlign={"left"} display={"flex"}>
          <Text fontSize='xl'> Explore the Next Generation of Interview-Taking Websites</Text>
        </Box>
        <Box>

          <Button mt={4} colorScheme='teal' size='md' p={"0px 60px"} onClick={()=> navigate("/interview")}>
            Take Interview
          </Button>
        </Box>
</Box>
      </Box>
    </Flex>

<div>
<div style={{display:"flex", flexDirection:"column" , rowGap:"10px"}}>
<div  style={{fontWeight:"bold", fontSize:'30px'}}>Interview Categories</div>
<div  style={{display:"flex", flexDirection:"row", textAlign:"center", margin:"auto", width:"85%", justifyContent:"space-between"}}>
  <div className='branch' style={{textAlign:"center", height:"auto", alignItems:"center", padding:"80px", fontWeight:"bold", fontSize:'45px',backgroundColor:"teal", color:"white", borderRadius:"10px"}}>MERN</div>
  <div className='branch' style={{textAlign:"center", height:"auto", alignItems:"center", padding:"80px", fontWeight:"bold", fontSize:'45px', backgroundColor:"black", color:"white", borderRadius:"10px"}}>JAVA</div>
  <div className='branch' style={{textAlign:"center", height:"auto", alignItems:"center", padding:"80px", fontWeight:"bold", fontSize:'45px',backgroundColor:"teal", color:"white", borderRadius:"10px"}}>NODE</div>
</div>
</div>
</div>

<div style={{marginTop:"10px"}}>
  <div style={{display:"flex", flexDirection:"column", rowGap:"10px", margin:"auto", width:"85%"}}>
    <div style={{fontWeight:"bold", fontSize:'30px'}}>Instructions</div>
    <div>
    <ul style={{textAlign:"left"}}>
      <li>Duration: The interview will last for a total of 10 minutes.</li>
      <li>Question Format: You will be presented with 10 questions during the interview. </li>
      <li>Time Management: It is important to manage your time effectively. You will have approximately 1 minute to answer each question. </li>
      <li>Technical Requirements: Ensure that you have a stable internet connection and a suitable environment for the interview. </li>
      <li>Finally, remember to relax and be yourself during the interview. Your personality and enthusiasm can also make a positive impression on the interviewer. Good luck!</li>
    </ul>
    </div>
  </div>
</div>
<Footer />
    </Box>


  )
}
export default HomePage
