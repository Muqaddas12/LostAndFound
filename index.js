//importing module
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'

// importing routes from routes
import Authentication from './route/Authentication.js'
import mainroute from './route/mainroute.js'
import DAtuh from './route/DAuthentication.js'

const app = express()

//Setting up template engine to ejs
app.set('view engine','ejs')
app.set('views',path.resolve(process.cwd(),'views'))
app.use(express.static(path.resolve(process.cwd(),'public')))

//settings up for body parser middleware
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use('/',mainroute)
app.use('/Login',Authentication)
app.use('/Logout',DAtuh)

app.listen(3000,()=>{
    console.log('app is running on port 3000')
})