API.chatLog("PetsPlugin je zapnutý! Verzia 1.0!");

API.on(API.CHAT, pets);
function pets(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
  
if(msg === "!pets"){
if(fromid == "4515471"){
setTimeout(function(){ API.sendChat("[@"+ from +"] Zvieratka sú zatiaľ nedostupné!"); }, 2000);
}
else{
API.sendChat("[@"+ from +"] Nemáš práva na použitie!"); 
}
}
}

API.on(API.CHAT, petslist);
function petslist(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
  
if(msg === "!petslist"){
if(fromid == "4515471"){
setTimeout(function(){ API.sendChat("[@"+ from +"] Dostupné zvieratka: :dog: ID: 1 | :cat: ID: 2 | :panda_face: ID: 3"); }, 2000);
}
else{
API.sendChat("[@"+ from +"] Nemáš práva na použitie!");
}
}
}


API.on(API.CHAT, rankinfo);
function rankinfo(data){
var msg = data.message;
var from = data.un;
var fromid = data.uid;
  
if(msg === "!rankinfo"){
if(fromid == "4515471"){
setTimeout(function(){ API.sendChat("[@"+ from +"] "); }, 2000);
}
}
}


/*API.on(API.CHAT, afk);
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
}*/
