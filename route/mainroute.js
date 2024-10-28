//importing predefined modules
import express from 'express'


//importing controllers
import maincontroller from '../controller/maincontroller.js'
import DisplayItemController from '../controller/DisplayItemController.js'

//importing middlewares
import Authentication from '../middleware/Authentication.js'

const mainroute=express.Router()

mainroute.get('/',Authentication.VerifyToken,maincontroller.Homepage)


mainroute.get('/Foundeditems',Authentication.VerifyToken,DisplayItemController.FoundedItems)


export default mainroute