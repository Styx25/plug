API.chatLog("RankPlugin je zapnutý! Verzia 1.0!");


API.on(API.CHAT, rankinfo);
function rankinfo(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
  
if(msg === "!rankinfo"){
if(fromid == "4515471"){
setTimeout(function(){ API.sendChat("[@"+ from +"] Rank 1: 1 000 coins | Rank 2: 1 600 coins | Rank 3: 2 500"); }, 2000);
}
else{
API.sendChat("[@"+ from +"] Nemáš práva na použitie!");
}
}
}
