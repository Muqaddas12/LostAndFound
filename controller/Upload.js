const database = require('../database');

const Upload = (req,res,next) => {

      
    let Place=0;
    
          if(Place=req.body.Place1)
          {
            
        const ItemName=req.body.Name;
        const Description=req.body.Description;
         Place=req.body.Place1;
        const Image = req.file.buffer;
        var date = new Date().toLocaleDateString();
        var contact=req.body.mno;
        var PName=req.body.Pname;
     
        const query = "insert into losteditems (IName,PName,Description,Place,Contact,Image,Date) values (?,?,?,?,?,?,?)";
    
        database.query(query,[ItemName,PName,Description,Place,contact,Image,date], function(err, data) {
            if (err) {
    
                return next(err);
            }
            else
            {
                setTimeout(function() {
                    res.render('index', { title: 'Express', session : req.session });
                }, 3000);
            }
        });
    
          } // if block end
    
        else
        {
            const Nameitem=req.body.Name;
            const Description=req.body.Description;
             Place=req.body.Place;
            const image=req.body.img;
            var date = new Date().toLocaleDateString();
            var Status=req.body.Status;
            var contact=req.body.mno;
            var Pname=req.body.Pname;
         
            const query = "insert into foundeditems (Name,Description,Place,image,status,date,contact,Pname) values (?,?,?,?,?,?,?,?)";
        
            database.query(query,[Nameitem,Description,Place,image,Status,date,contact,Pname], function(err, data) {
                if (err) {
        
                    return next(err);
                }
                else
                {
                    setTimeout(function() {
                        res.render('index', { title: 'Express', session : req.session });
                    }, 3000);
                }
            });
    
        }
    
      
       
    }

    module.exports = Upload;