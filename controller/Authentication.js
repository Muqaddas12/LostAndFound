// Login Route
const database = require('../database');

const LoginAuthentication=(req, res, next)=> {

    var RedirectLabel =req.body.RedirectLabel;
    console.log(RedirectLabel);
    
    var user_email_address = req.body.user_email_address;
               
    var user_password = req.body.user_password;

    if (user_email_address && user_password) {
        query = `
        SELECT * FROM students 
        WHERE UserName = "${user_email_address}"
        `;

        database.query(query, function (error, data) {

            if (data.length > 0) {
                for (var count = 0; count < data.length; count++) {
                    if (data[count].Password == user_password) {
                        req.session.user_id = data[count].id;
                        if(RedirectLabel==='index')
                        {
                            res.redirect("/");
                        }
                        else if(RedirectLabel==='LostedItems')
                        {
                            res.redirect('/LostedItems');
                        }
                        else if(RedirectLabel==='FoundedItems')
                        {
                            res.redirect('/FoundedItems');
                        }
                        
                    }
                    else {
                      res.redirect('/Login',{msg:"please enter correct details",Redirect:"Redirect"})
                    }
                }
            }
            else {
                res.render('Login', { msg: 'Please Enter the correct details', flag: '1',Redirect: 'Redirect'
 })

            }
            res.end();
        });
    }
    else {
        res.send('Please Enter Email Address and Password Details');
        res.end();
    }

}


const LoginRedirect= (req, res)=>{
    const Redirect =req.query.ForRedirect;
    if(Redirect==='Login')
    {
        res.render('Login',{Redirect:"index"}) 
    }
    else if(Redirect==='LostedItems')
    {
        res.render('Login',{Redirect:"LostedItems"}) 
    }
    else if(Redirect==='FoundedItems')
    {
        res.render('Login',{Redirect:"FoundedItems"}) 
    }
    
   


}

// Logout Route

const LogoutAuthentication=(req, res)=>{

    req.session.destroy();

    res.redirect("/");

}


module.exports = {LoginAuthentication,LoginRedirect,LogoutAuthentication};