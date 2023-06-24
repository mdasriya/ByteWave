// import React, { useState } from 'react'

// const Signup = () => {
//     const [name,setName]=useState("")
//     const [email,setemail]=useState("")
//     const [pass,setpass]=useState("")
//     //const [age,setage]=useState("")
//    // const [gender,setgender]=useState("")
//     //const[is_married,setmar]=useState("")
//     const [batch ,setbatch]=useState("")

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         let obj={
//             name,
//             email,
//             pass,
//            // age,
//             //gender,
//            batch
//         }
//         //console.log(obj)
//         // fetch("https://outrageous-shoe-dog.cyclic.app/users/register",{
//         //     method:"POST",
//         //     headers:{
//         //         "Content-Type":"application/json"
//         //     },
//         //     body:JSON.stringify(obj)
//         // }).then((res)=>res.json())
//         // .then((res)=>console.log(res))
//         // .catch((err)=>console.log(err))
//         setName("")
//         setemail("")
//         setpass("")
//        // setage("")
//         //setgender("")
//         setbatch("")
        
//     }

//   return (
//     <div className="signup-container">
//       <form action="" onSubmit={(e)=>handleSubmit(e)} >
//         <h1>Registration form</h1>
//         <input type="text" placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
//         <br />
//         <input type="text" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
//         <br />
//         <input type="password" placeholder='password' name='pass' value={pass} onChange={(e)=>setpass(e.target.value)} />
//         <br />
//         {/* <input type="number" placeholder='age' name='age' value={age} onChange={(e)=>setpass(e.target.value)} />
//         <br/>
//         <input type="string" placeholder='gender' name='gender' value={gender} onChange={(e)=>setpass(e.target.value)} /> */}
//         {/* <br/> */}
//         <input type="string" placeholder='batch' name='batch' value={batch} onChange={(e)=>setpass(e.target.value)} />
//         <br/>
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }


// export default Signup


// import React from 'react'

// function Signup() {
//   return (
//     <div>
//         <h1>Signup page </h1>
//     </div>
//   )
// }

// export default Signup






import React, { useState } from 'react';
import './SignupForm.css';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    batch: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform your form submission logic here
  };

  return (
    <div className="signup-form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="batch">Batch:</label>
          <input
            type="text"
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
