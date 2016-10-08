API.chatLog("AutoWoot je zapnutý! Verzia 1.0");

API.on (API.CHAT, AutoWoot);
function AutoWoot(data){
  var msg = data.message;
  var from = data.un
  
      API.getWaitListPosition = function(id){
        if(typeof id === 'undefined' || id === null){
            id = API.getUser().id;
        }
        var wl = API.getWaitList();
        for(var i = 0; i < wl.length; i++){
            if(wl[i].id === id){
                return i;
            }
        }
