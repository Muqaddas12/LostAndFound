const database = require('../database')
const session = require('express-session');

// Founded Items
const FoundedItems = (req, res) => {
   
    var query ="SELECT * FROM foundeditems ORDER BY id DESC";
    database.query(query, function(error, data){
 
     if (error)
         throw error;
     else
         res.render('FoundedItems', { title: 'FoundedItems',Sampledata:data, session:req.session });
     });
 }


 // Losted Items
 const LostedItems = (req, res) => {
    var query = "SELECT * FROM losteditems ORDER BY id DESC";
    database.query(query, function(error, data) {
        if (error) {
            throw error;
        } else {
            data.forEach(element => {
                if (element.Image instanceof Buffer) {
                    element.Image = element.Image.toString('base64');
                }
            });
            res.render('LostedItems', { title: 'Losteditem', data: data ,session:req.session});
        }
    });
}

module.exports = {FoundedItems,LostedItems};