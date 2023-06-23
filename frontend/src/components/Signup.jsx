// import React, { useState } from 'react'

// const Signup = () => {
//     const [name,setName]=useState("")
//     const [email,setemail]=useState("")
//     const [pass,setpass]=useState("")
//     const [age,setage]=useState("")
//     const [gender,setgender]=useState("")
//     const[is_married,setmar]=useState("")
//     const [city ,setcity]=useState("")

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         let obj={
//             name,
//             email,
//             pass,
//             age,
//             gender,
//             city,
//             is_married
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
//         setage("")
//         setgender("")
//         setcity("")
//         setmar("")
//     }

//   return (
//     <div>
//       <form action="" onSubmit={(e)=>handleSubmit(e)} >
//         <h1>Registration form</h1>
//         <input type="text" placeholder='name' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>
//         <br />
//         <input type="text" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
//         <br />
//         <input type="password" placeholder='password' name='pass' value={pass} onChange={(e)=>setpass(e.target.value)} />
//         <br />
//         <input type="number" placeholder='age' name='age' value={age} onChange={(e)=>setpass(e.target.value)} />
//         <br/>
//         <input type="string" placeholder='gender' name='gender' value={gender} onChange={(e)=>setpass(e.target.value)} />
//         <br/>
//         <input type="string" placeholder='city' name='city' value={city} onChange={(e)=>setpass(e.target.value)} />
//         <br/>
//         <input type="boolen" placeholder='is_married' name='is_married' value={is_married} onChange={(e)=>setpass(e.target.value)} />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }


// export default Signup


import React from 'react'

function Signup() {
  return (
    <div>
        <h1>Signup page </h1>
    </div>
  )
}

export default Signup






