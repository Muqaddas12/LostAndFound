import express from "express";


//importing middlewares
import Authentication from "../middleware/Authentication.js";

// importing controllers
import AuthenticationController from "../controller/AuthenticationController.js";

const Auth=express.Router()

//Login get route
Auth.get('/',(req,res)=>{

    res.render('Login',{title:'Login'})
})

// Login post route
Auth.post('/',Authentication.Login,Authentication.CreateToken,AuthenticationController.PostLogin)





export default Auth