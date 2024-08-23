const mysql = require('mysql');
const connection = mysql.createConnection({
	host : 'localhost',
	database : 'foundandlost',
	user : 'root',
	password : '1234',
    
});

connection.connect(function(error){
	if(error)
	{
		console.log("error");
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;