// import React, { useState } from 'react'

// const Login = () => {
//     const [email,setemail]=useState("")
//     const [pass,setpass]=useState("")

//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         let obj={
//             email,
//             pass
//         }
//         //console.log(obj)
//         // fetch("https://outrageous-shoe-dog.cyclic.app/users/login",{
//         //     method:"POST",
//         //     headers:{
//         //         "Content-Type":"application/json"
//         //     },
//         //     body:JSON.stringify(obj)
//         // }).then((res)=>res.json())
//         // .then((res)=>{
//         //     const data=localStorage.setItem("token",res.token)
//         //     console.log(res)
//         // })
//         // .catch((err)=>console.log(err))
//         // setemail("")
//         // setpass("")
//     }
//   return (
//     <div>
//       <form action="" onSubmit={(e)=>handleSubmit(e)} >
//         <h1>Login form</h1>
//         <input type="text" placeholder='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
//         <br />
//         <input type="password" placeholder='password' name='pass' value={pass} onChange={(e)=>setpass(e.target.value)} />
//         <br />
//         <button>submit</button>
//       </form>
//     </div>
//   )
// }

// export default Login


import React from 'react'

function Login() {
  return (
    <div>
        <h1>Login page</h1>
    </div>
  )
}

export default Login