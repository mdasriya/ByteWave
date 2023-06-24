import React from 'react'


const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  /* additional styles if needed */
};

const headline={
  alignItems: 'center',
  width:"80%",
  fontSize:"25px",


}
function Home() {
  return (
    <div>
       <div style={centerStyle}>
        <h1>Introducing</h1>

    </div>
      <div style={centerStyle}>
      <p style={headline}>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>
      </div>
      <br/>
      <br/>

      <div style={{height:"500px",margin:"auto",display:"flex",
         width:"90%"}}>
      <img style={{height:"100%",margin:"auto"}} src="https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?size=626&ext=jpg"  alt=''/>
      <img style={{height:"100%",margin:"auto"}}  src="https://img.freepik.com/free-vector/cute-artificial-intelligence-robot-isometric-icon_1284-63045.jpg?size=626&ext=jpg"  alt=''/>
      {/* <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg" alt=''/> */}
      </div>
    </div>
   
  )
}

export default Home