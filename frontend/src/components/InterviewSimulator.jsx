import React, { useEffect, useState } from 'react';
import {
  Box, Button, Alert, Select, Text, Textarea, VStack, AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import "./styled.css"
import { useNavigate } from 'react-router-dom';
const InterviewSimulator = () => {
  const [transcript, setTranscript] = useState('');
  const [color, setColor] = useState("green")
  const [questions, setQuestions] = useState("");
  const [userResponse, setUserResponse] = useState("");
  const [feedback, setFeedback] = useState("")
  const [count, setCount] = useState(0)
  const [track, setTrack] = useState("mern")
  const [seconds, setSeconds] = useState(1 * 60);
  const navigate = useNavigate()


// *********************** Countdown Blinking Effect start****************************//
const [isBlinking, setIsBlinking] = useState(false);
const toggleBlink = () => {
  setIsBlinking(!isBlinking);
};
// *********************** Countdown Blinking Effect end****************************//




  const startInterview = async () => {
    if (count == 0) {
      StartCount()
      setSeconds(1 * 60)
    }
    setFeedback("")
    if (count >= 6) {
      navigate("/finished")
    }
    await fetch(`https://interviewaibackend-production.up.railway.app/${track}/questions`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        // Process the created item
        // console.log(data.questions[0].question);
        setQuestions(data.questions[0].question)
        setCount((prev) => prev + 1)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const submitResponse = () => {
    if (!transcript) {
      alert("attempt your quesation first")
    } else {


      let string = "question: " + questions + " " + "answer: " + userResponse + " give me the feedback out of 10 according to the answer"
      // console.log(string);

      // Make a POST request to the backend to analyze the user response and provide feedback
      fetch('https://interviewaibackend-production.up.railway.app/chatgpt/retrieve-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: string }),
      })
        .then((response) => response.json())
        .then((res) => {
          // console.log(res.data);
          setFeedback(res.data);
      

          setTranscript("")
        })
        .catch((error) => {
          console.error('Error submitting user response:', error);
        });
    }


  };
  //  ******************************* Timer Countdown code start***************************************
  const StartCount = async () => {
    const interval = await setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }





  const formatTime = () => {

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}min:${remainingSeconds.toString().padStart(2, '0')}sec`;
  };
  //  ******************************* Timer Countdown code end***************************************

  useEffect(() => {
    if (seconds === 0) {

      setCount(0)
      setFeedback("")
      setQuestions("")
      setUserResponse("")
      navigate("/finished")
    }
    if (seconds <= 15) {
      setColor("red")
      toggleBlink()
    }
  }, [seconds]);





  // ***************************** Mic Recognise code start************************************ //





  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = true;


  const startRecording = () => {
    if(!questions){
      return alert("start interview first")
    }
    recognition.start();
    recognition.addEventListener('result', (event) => {
      const newTranscript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');

      setTranscript(newTranscript);
    });

    return () => {
      recognition.stop();
    };
  };

  const stopRecording = () => {
    recognition.stop();
    setUserResponse(transcript)
  };


  // ***************************** Mic Recognise code start************************************ //







  return (
    <Box className='container' width={"100%"} height={"90vh"}  display={"flex"} justifyContent={"space-between"} >


      <Box width={"15%"} backgroundColor={"#202123"}    className='firstbox' display={"flex"} flexDirection={"column"}>

<Box>
<Button mt={2} background={"none"} width={"70%"} color={"white"} border={"1px solid gray"} _hover={{ background: "#2e2d2d" }} mb={2}>
          +  New Interview
        </Button>
</Box>
    

        <Text as='b' color={"white"}>Previous questions </Text>
      </Box>

      <Box className='secondBox' p={4} width={"90%"}>
        <Box textAlign={"end"} className='countdown'>
          <Text as={"b"} color={color} fontSize='xl' className={`text ${isBlinking ? 'blink' : ''}`} >Countdown: {formatTime()}</Text>
        </Box>
        <Text fontSize="2xl" mb={4}>
          Interview Simulator
        </Text>
        <Box>
          <Button colorScheme="teal" onClick={startInterview} mb={4} mt={2} disabled={count >= 1}>
            Start Interview
          </Button>
          <select onChange={(e) => setTrack(e.target.value)} style={{ border: "1px solid gray", padding: "5px", marginLeft: "20px" }}>

            <option onChange={(e) => setTrack(e.target.value)} value="mern">MERN</option>
            <option onChange={(e) => setTrack(e.target.value)} value="java">JAVA</option>
            <option onChange={(e) => setTrack(e.target.value)} value="node">NODE</option>
          </select>
        </Box>



        <Box width={"100%"} borderRadius={"5px"} p={"0px 2px"} display={"flex"} justifyContent={"space-between"}>
          <Text as="b">Question: {questions}</Text>

          <Box display={"flex"} gap={3} >
            <Text marginTop={2}>{count} out of 5</Text>
            {/* <i className="fa fa-microphone"></i> */}
            <Button padding={"0px"} colorScheme='none' onClick={startRecording}><i className="fa fa-microphone"></i></Button>
            <Button onClick={stopRecording}>Stop</Button>
          </Box>

        </Box>


        <VStack spacing={4} mb={2} align="start" display={"flex"}>
          <Textarea
            placeholder="Your response..."
            rows={5}
            id="result"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />



          <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Button colorScheme="teal" onClick={submitResponse}>
              Submit Response
            </Button>

            {count == 5 ? <Button colorScheme="teal" onClick={() => navigate("/finished")}>
              Finish
            </Button> : count >= 1 && count <= 5 ? <Button colorScheme="teal" onClick={startInterview}>
              Next
            </Button> : ""}

            {/* {count>=1 &&  <Button colorScheme="teal" onClick={startInterview}>
          Next
        </Button>} */}

          </Box>
        </VStack>
        {feedback && <Text id="feedback" as="b">feedback: {feedback}</Text>}

        {/* {feedback && (
        <Box mt={4}>
          <Text>Feedback:</Text>
          <Text mb={2}>{feedback}</Text>
        </Box>
      )} */}
      </Box>

    </Box>
  );
};

export default InterviewSimulator;