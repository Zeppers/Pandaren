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
    try{
        con.query("select * from games",(err,rows)=>{
            res.status(200).send(JSON.stringify(rows));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.get('/games/:id',async (req,res)=>{
    try{
        con.query("select * from games where id="+req.params.id,(err,rows)=>{
            let game = rows[0];
            if(game)
                res.status(200).send(JSON.stringify(game));
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.post('/games',async (req,res)=>{
    
});
app.put('/games/:id',async (req,res)=>{
    
});
app.delete('/games/:id', async (req,res)=>{
    try{
        con.query("delete from games where id="+req.params.id,(err,rows)=>{
            let game = rows[0];
            if(game)
                res.status(202).send(JSON.stringify({message:'accepted!'}));
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});

app.get('/events',async (req,res)=>{
    try{
        con.query("select * from events",(err,rows)=>{
            res.status(200).send(JSON.stringify(rows));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});

app.get('/events/:id', async (req,res)=>{
    con.query("select * from events where id="+req.params.id,(err,rows)=>{
        let event = rows[0];
        if(rows)
            res.status(200).send(JSON.stringify(event));
        else
            res.status(404).send(JSON.stringify({message:'not found!'}));
    })
})


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

