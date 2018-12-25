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
    con.query("select * from games",(err,rows)=>{
        res.status(200).send(JSON.stringify(rows));
    })
});
app.get('/games/:id',async (req,res)=>{
        con.query("select * from games where id="+req.params.id,(err,rows)=>{
            let gameDB = rows[0];
            let game = {};
            if(gameDB){
                game = gameDB;
                con.query("select * from images where id="+gameDB.id_image,(err,rows)=>{
                    game.image = rows[0];
                    delete game.id_image;
                    res.status(200).send(JSON.stringify(game));
                })
            }  
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        })
});
app.get('/games/:id/events', async (req,res)=>{
    con.query("select * from events where id_game="+req.params.id,(err,rows)=>{
        res.status(200).send(JSON.stringify(rows));
    })
});

app.post('/games',async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                let game = req.body.game;
                if(game){
                        con.query("insert into games values(NULL,'"+game.name+"','"+game.genre+"','"+game.description+"',0,0,'"+game.cover+"',"+game.id_image+")");
                        res.status(201).send(JSON.stringify({message:'created!'}));
                }
                else
                    res.status(400).send(JSON.stringify({message:'failed!'}));
            }
            else res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }   
});
app.put('/games/:id',async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                let game = req.body.game;
                if(game){
                    Object.keys(game).forEach(function(key,index){
                        if(typeof game[key]==="string")
                            con.query("update games set "+key+"='"+game[key]+"' where id="+req.params.id);
                        else
                            con.query("update games set "+key+"="+game[key]+" where id="+req.params.id);
                    })
                    res.status(202).send(JSON.stringify({message:'updated!'}));
                }
                else{
                    res.status(400).send(JSON.stringify({message:'failed!'}));
                }
            }
            else
                res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }
    else
        res.status(400).send(JSON.stringify({message:'failed!'}));  
});
app.delete('/games/:id', async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                con.query("delete from games where id="+req.params.id,(err,rows)=>{
                    if(rows.affectedRows!=0){
                        res.status(202).send(JSON.stringify({message:'accepted!'}));
                    }
                    else
                        res.status(404).send(JSON.stringify({message:'not found!'}));
            });
            }
            else
                res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }
    else
        res.status(400).send(JSON.stringify({message:'failed!'}));
        
});
app.get('/games/:id/image',async (req,res)=>{
    con.query("select * from games where id="+req.params.id,(err,rows)=>{
        if(rows.length!=0){
            con.query("select * from images where id="+rows[0].id_image,(err,rows)=>{
                res.status(200).send(JSON.stringify(rows[0]));
            });
        }
        else
            res.status(404).send(JSON.stringify({message:'not found!'}));
    });
});

//EVENTS ROUTE///////////////////////////////////////////////////////////
app.get('/events',async (req,res)=>{
       con.query("select * from events",(err,rows)=>{
            res.status(200).send(JSON.stringify(rows));
       })
});

app.get('/events/:id', async (req,res)=>{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            let eventDB = rows[0];
            let event={};
            if(eventDB){
                event=eventDB;
                con.query("select * from locations where id="+eventDB.id_location,(err,rows)=>{
                    event.location = rows[0];
                    con.query("select * from games where id="+eventDB.id_game,(err,rows)=>{
                        let gameDB=rows[0];
                        con.query("select * from images where id="+gameDB.id_image,(err,rows)=>{
                            let game = gameDB;
                            game.image=rows[0];
                            delete game.id_image;
                            event.game = game;
                            delete event.id_location; delete event.id_game;
                            res.status(200).send(JSON.stringify(event));
                        })     
                    });
                });    
            }
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        })
});

app.get('/events/:id/location', async (req,res)=>{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            if(rows.length!=0){
                con.query("select * from locations where id="+rows[0].id_location,(err,rows)=>{
                    res.status(200).send(JSON.stringify(rows[0]));
                });
            }
            else
                res.status(404).send(JSON.stringify({message:'not found!'}));
        });
});
app.get('/events/:id/game', async (req,res)=>{
        con.query("select * from events where id="+req.params.id,(err,rows)=>{
            if(rows.length!=0){
                con.query("select * from games where id="+rows[0].id_game,(err,rows)=>{
                    let gameDB = rows[0];
                    con.query("select * from images where id="+gameDB.id_image,(err,rows)=>{
                        let game = gameDB; delete game.id_image;
                        game.image = rows[0];
                        res.status(200).send(JSON.stringify(game));
                    })
                })
            }
            else
                res.status(404).send(JSON.stringify({message:'not found!'}))
        })
});
app.post('/events/', async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                let event = req.body.event;
                if(event){
                    con.query("insert into events values(NULL,'"+event.name+"','"+event.description+"',"+event.id_location+","+event.id_game+",'"+event.date+"')");
                    res.status(201).send(JSON.stringify({message:'created!'}));
                }
                else
                    res.status(400).send(JSON.stringify({message:'failed!'}));
            }
            else
                res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }
    else
        res.status(400).send(JSON.stringify({message:'failed!'}));
});
app.put('/events/:id', async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                let event=req.body.event;
                con.query("select * from events where id="+ req.params.id,(err,rows) =>{
                    if(rows.length!=0){
                        Object.keys(event).forEach(function (key,index){
                            if(typeof event[key]==="string") 
                                con.query("update events set "+key+"='"+event[key]+"' where id="+req.params.id);
                            else
                                con.query("update events set "+key+"="+event[key]+" where id="+req.params.id);
                         }) 
                        res.status(202).send(JSON.stringify({message:'updated!'}));
                    }
                    else
                        res.status(404).send(JSON.stringify({message:'not found!'}));
                });
            }
            else
                res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }
    else
        res.status(400).send(JSON.stringify({message:'failed!'}));
});
app.delete('/events/:id', async (req,res)=>{
    let admin = req.body.admin;
    if(admin){
        con.query("select * from admins where email='"+admin.email+"' and password='"+admin.password+"'",(err,rows)=>{
            if(rows.length!=0){
                con.query("delete from events where id="+req.params.id,(err,rows)=>{
                    if(rows.affectedRows!=0)
                        res.status(202).send(JSON.stringify({message:'accepted!'}));
                    else
                        res.status(404).send(JSON.stringify({message:'not found'}));
                });
            }
            else
                res.status(403).send(JSON.stringify({message:'you have no authorization!'}));
        })
    }
    else
        res.status(400).send(JSON.stringify({message:'failed!'}));     
});
app.listen(8000,()=>{
    console.log('server listening on port 8000...');
});

