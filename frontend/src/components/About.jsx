import React from 'react'
const centerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  /* additional styles if needed */
};

const headline={
  alignItems: 'center',
  width:"50%",
  fontSize:"25px",


}

function About() {
  return (
    <div>
    <div style={centerStyle}>
     <h1>Transforming work and creativity with AI</h1>

 </div>
   <div style={centerStyle}>
   <p style={headline}>Our API platform offers our latest models and guides for safety best practices.</p>
   </div>
   <br/>
   <br/>
   <div>
    <img style={{height:"500px",margin:"auto",display:"flex",
      width:"90%"}} src='https://images.openai.com/blob/557a9f70-0bf6-4d72-91c6-5bc5423ad462/stangel-2022-0602.jpg?trim=90,0,630,0&width=2000'/>
   </div>
   <br/>
   <br/>

   <div style={{height:"500px",margin:"auto",display:"flex",
      width:"90%"}}>
   <img style={{height:"100%",margin:"auto",width:"45%"}} src="https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?size=626&ext=jpg"  alt=''/>
   <img style={{height:"100%",margin:"auto",width:"45%"}}  src="https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg?size=626&ext=jpg"  alt=''/>
   {/* <img style={{height:"100%",margin:"auto"}} src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw54f0dee5/images/shorts-guide/2020/guys-shorts-guide/SLIM%20CUT-OFF.jpg" alt=''/> */}
   </div>
 </div>
  )
}

export default About