admins (email,name,password)
events (id,name,description,id_location,id_game,id_admin,data)
locations(id,name,capacity)
game(id,name,genre)


insert into Admins values('petrecosmin@gmail.com','Petre Cosmin','balenaalbastra2');
insert into Admins values('niculaeandreea@gmail.com','Niculae Andreea','ortodontoza');
insert into Admins values('paundiana@gmail.com','Paun Diana','craciun');
insert into Admins values('niculescuioana@gmail.com','Niculescu Ioana','gloanteoarbe');


insert into Games values (null,"Diablo II","Role-Playing(RPG)");
insert into Games values (null,"Hitman","Tactical");
insert into Games values(null,"DOTA 2","MMORPG");
insert into Games values (null,'Farm Simulator','Simulator')

insert into Locations values(null,'Sala Palatului,Bucuresti',3000);
insert into Locations values(null,'Palatul Copiilor, Bucuresti',1000);
insert into Locations values(null,'Nexus,Bucuresti',240);

insert into Events values(null,'Gamescon-Dota 2018','First Battlecup for non-professional teams',2,3,2,'2018-10-10 20:30:00');
insert into Events values(null,'WinOrLose 2018','First real-time and 100% true Hitman simulation event',1,2,1,'2018-09-00 12:00:00');
insert into Events values(null,'BizzBizzGame 2018','Only at this event you can become one of the animals. Best costume wins.',3,4,2,'2018-08-11 21:00:00');
insert into Events values(null,'DangerCon','Diablo Fans must participate in this 12 hours event. You will play the game and listen to a real orchestra.',3,1,3,'2018-07-10 18:45:00');
