const app = require('express')();
const mysql = require('mysql');

var con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'tehnologiiweb'
});
con.connect();

app.get('/games',async (req,res)=>{
    res.json()
});
app.get('/games/:id',async (req,res)=>{

});


app.listen(8000,()=>{
    console.log('server listening on port 8000...');
});
function Location(id, name, capacity){
    this.id = id;
    this.name = name;
    this.capacity = capacity;
}
function Event(id,name,description,location,game){
    this.id = id;
    this.name = name;
    this.description = description;
    this.location = location;
    this.game = game;
}
function Game(id, name, genre){
    this.id = id;
    this.name = name;
    this.genre = genre;
}
function Admin(email, name, password, events){
    this.email = email;
    this.name = name;
    this.password = password;
    this.events = events;
}

