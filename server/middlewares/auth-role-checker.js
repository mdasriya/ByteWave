const authrolechecker=(permittedrole)=>{
    return(req,res,next)=>{
    
    const user_role=req.role;
    
    if(permittedrole.includes(user_role)){
        next()
    }else{
        return res.send("Role is not Authorized")
    }
    
    }
    
    }


    module.exports={authrolechecker}