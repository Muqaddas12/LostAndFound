const database = require('../database')

const Verify = (req,res)=>{
    const Id=req.body.Id;
    const query =`Select * from losteditems where Id = '${Id}'`;

    database.query(query,(err,data)=>{
        if(err)
        {
            throw err;
        }
        else{
            const Iquery=`insert into foundeditems (data.id)`
        }
    })
   
}

module.exports = Verify;