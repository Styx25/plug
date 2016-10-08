API.chatLog("Plugin je zapnutý! Verzia 1.0!");

API.on(API.CHAT, afk);
function afk(data){
var msg = data.message;
var from = data.un;

if(msg === "!afk"){
setTimeout(function(){ API.sendChat(""+ from +" je AFK!"); }, 2000);
}
}

API.on(API.CHAT, back);
function back(data){
var msg = data.message;
var from = data.un;

if(msg === "!back"){
setTimeout(function(){ API.sendChat(""+ from +" je späť!"); }, 2000);  
}
}
