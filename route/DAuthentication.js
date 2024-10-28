import express from 'express'

const DAuth=express.Router();

//importing controller
import AuthenticationController from "../controller/AuthenticationController.js";

//Logout route
DAuth.get('/', AuthenticationController.Logout)

export default DAuth
