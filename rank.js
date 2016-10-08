API.chatLog("RankPlugin je zapnutý! Verzia 1.0!");


API.on(API.CHAT, rankinfo);
function rankinfo(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
  
if(msg === "!rankinfo"){
if(fromid == "4515471"){
setTimeout(function(){ API.sendChat("[@"+ from +"] "); }, 2000);
}
else
}
}
