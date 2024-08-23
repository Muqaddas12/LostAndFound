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
                        if(RedirectLabel==='Homepage')
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
                        res.send('Incorrect Password');
                    }
                }
            }
            else {
                res.send('Incorrect Email Address');
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
    if(Redirect==='FirstLogin')
    {
        res.render('Login',{Redirect:"Homepage"}) 
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