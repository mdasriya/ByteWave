import React, { useState } from 'react'
import './InputBox.css'
import { AiOutlineAudio } from 'react-icons/ai';

const VoiceInput = () => {
  const [question, setQuestion] = useState('Loading...')

  const handlevoice = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US' || "hi-IN"; // Language setting
      // Event handlers for recognition start and result
      recognition.onstart = function () {
        console.log('Speech recognition started');
      }
      recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        console.log('Speech recognition result:', result);

        // Update the result element with the recognized speech
        setQuestion(result);
      };
      recognition.start();

    } else {
      {
        alert('Speech recognition is not supported in this browser.');
      }
    }
  }


  return (
    <>
      <div className="input-box-container">
        <input className="input-box" type="text" placeholder="Type something..." />
        <div className="mic-icon">
          <AiOutlineAudio onClick={handlevoice} />
        </div>
        <button className='submit'>submit</button>
      </div>
      <div className='question-box'>
      <p>{question}</p>
      </div>
    </>
  )
}

export default VoiceInput
