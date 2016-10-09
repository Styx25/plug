API.chatLog("AutoWoot je zapnutý! Verzia 1.0");

;(function(){
  API.on(API.ADVANCE,callback).trigger(API.ADVANCE);
  function callback(){
	$('#woot').click();
	
  }
})();


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
        return -1;
    };
