import connection from "../database.js"
import jwt from 'jsonwebtoken'
const secretkey='project'
let user;

class Authentication{
    
    
    static Login=(req,res,next)=>{
        if(!req.body){
            return res.redirect('/Login?Invalid%Username%OR%Password')
        }
        const {user_email_address,user_password}=req.body
        const query=`select * from users where email=? and password=?`
        connection.query(query,[user_email_address,user_password],(err,result)=>{
            if(err){
                console.log('database error',err)
              return  res.send('404 not found or please contact the adminstrator')
            }
            if(result.length===0){
                console.log('user not found')
               return res.redirect('/Login?Invalid%Username%OR%Password')

            }
            user=result
            next()
        })

    }

    static CreateToken=(req,res,next)=>{
        const token=jwt.sign({
            email:user[0].email
        },secretkey,{
            expiresIn:'1h'
        })
        res.cookie('key',token,{
            httpOnly:true,
            maxAge: 3600000 // 1 hour in milliseconds
            
        }
        )
      next()
    }

    static VerifyToken=(req,res,next)=>{
        if(!req.cookies.key){
            req.status='LoggedOut'
          next()
        }
        const Token=req.cookies.key
       const result= jwt.verify(Token,secretkey)
      req.status='LoggedIn'
      next()
    }
}

export default Authentication