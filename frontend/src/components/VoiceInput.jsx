import React from 'react'
import './InputBox.css'
const VoiceInput = () => {
  return (
    <div className="input-box-container">
      <input className="input-box" type="text" placeholder="Type something..." />
      <div className="mic-icon">
        <AiOutlineAudio />
      </div>
    </div>
  )
}

export default VoiceInput
