class maincontroller{
    static Homepage=(req,res)=>{
        const status=req.status
        res.render('index',{title:'Homepage',status})
    }


    static FoundedItems=(req,res)=>{
        
    }
}


export default maincontroller