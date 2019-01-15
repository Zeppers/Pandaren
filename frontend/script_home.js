document.addEventListener('DOMContentLoaded', function(){
   
    let http = new XMLHttpRequest();
    http.open('get','http://188.25.199.62:3000/games',true);
    http.setRequestHeader('Content-type', 'application/json');

    http.send();

    http.addEventListener('readystatechange',function(){

        if(http.readyState==4){
            var games = JSON.parse(http.response);
            console.log(games);
            var imgElement = document.querySelector("#game_image_4");
            let game4 = games[4];
            
            http.open('get','http://188.25.199.62:3000/images/'+game4.cover.path+"",true);
            http.send();
            
            http.addEventListener('readystatechange',()=>{
                if(http.readyState==4){
                    imgElement.src = http.response;
                }
            })

    }});
    


});