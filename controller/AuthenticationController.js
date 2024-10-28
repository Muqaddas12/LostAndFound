class AuthenticationController{
    static PostLogin=(req,res)=>{
        res.redirect('/')
    }

    static Logout=(req,res)=>{
        console.log('logout')
        res.clearCookie('key')
        res.redirect('/?Logout%Successfully')
    }
}


export default AuthenticationController