const app = require('express')();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Acces-Control-Allow-Methods','GET,POST,DELETE,PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'tehnologiiweb'
});

con.connect();
//GAMES ROUTE/////////////////////////////////////////////////////////
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
    try{
        let game = req.body;
        if(game)
            {
                con.query("insert into games values("+game.id+",'"+game.name+"','"+game.genre+"')");
                res.status(201).send(JSON.stringify({message:'created!'}));
            }
        else
            res.status(400).send(JSON.stringify({message:'failed!'}));
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.put('/games/:id',async (req,res)=>{
    try{
        let game = req.body;
            con.query("select * from games where id="+req.params.id,(err,rows)=>{
                if(rows.length!=0){
                    Object.keys(game).forEach(function(key,index){
                        if(typeof game[key]==="string")
                            con.query("update games set "+key+"='"+game[key]+"' where id="+req.params.id);
                        else
                            con.query("update games set "+key+"="+game[key]+" where id="+req.params.id);
                    })
                    res.status(201).send(JSON.stringify({message:'updated!'}));
                }
                else
                    res.status(404).send(JSON.stringify({message:'not found!'}));
            });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.delete('/games/:id', async (req,res)=>{
    try{
        con.query("delete from games where id="+req.params.id,(err,rows)=>{
                if(rows.affectedRows!=0){
                    res.status(202).send(JSON.stringify({message:'accepted!'}));
                }
                else
                    res.status(404).send(JSON.stringify({message:'not found!'}));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
//EVENTS ROUTE///////////////////////////////////////////////////////////
app.get('/events',async (req,res)=>{
    try{
       con.query("select * from events",(err,rows)=>{
            res.status(200).send(JSON.stringify(rows));
       })
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});

app.get('/events/:id', async (req,res)=>{
    try{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            let eventDB = rows[0];
            let event={};
            if(eventDB){
                event.id=eventDB.id;
                event.name=eventDB.name;
                event.description = eventDB.description;
                event.date = eventDB.date;
                con.query("select * from locations where id="+eventDB.id_location,(err,rows)=>{
                    event.location = rows[0];
                    con.query("select * from games where id="+eventDB.id_game,(err,rows)=>{
                        event.game = rows[0];
                        res.status(200).send(JSON.stringify(event));
                    });
                });    
            }
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});

app.get('/events/:id/location',(req,res)=>{
    try{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            if(rows.length){
                con.query("select * from locations where id="+rows[0].id_location,(err,rows)=>{
                    res.status(200).send(JSON.stringify(rows[0]));
                });
            }
            else
                res.status(500).send(JSON.stringify({message:'not found!'}));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.get('/events/:id/game',(req,res)=>{
    try{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            if(rows.length!=0){
                con.query("select * from games where id="+rows[0].id_game,(err,rows)=>{
                    res.status(200).send(JSON.stringify(rows[0]));
                })
            }
            else
                res.status(404).send(JSON.stringify({message:'not found!'}))
        })
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.post('/events/',(req,res)=>{
    try{
        let event = req.body;
        if(event){
            con.query("insert into events values("+event.id+",'"+event.name+"','"+event.description+"',"+event.id_location+","+event.id_game+","+event.id_admin+",'"+event.date+"')");
            res.status(201).send(JSON.stringify({message:'created!'}));
        }
        else
            res.status(400).send(JSON.stringify({message:'failed!'}));
    }catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.put('/events/:id',(req,res)=>{
    try{
        
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
});
app.delete('/events/:id',(req,res)=>{
    try{
        con.query("delete from events where id="+req.params.id,(err,rows)=>{
            if(rows.affectedRows!=0)
                res.status(202).send(JSON.stringify({message:'accepted!'}));
            else
                res.status(404).send(JSON.stringify({message:'not found'}));
        });
    }
    catch(e){
        console.log(e);
        res.status(500).send(JSON.stringify({message:'server error!'}));
    }
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

