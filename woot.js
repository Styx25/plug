API.chatLog("AutoWoot je zapnutý! Verzia 1.0");

;(function(){
  API.on(API.ADVANCE,callback).trigger(API.ADVANCE);
  function callback(){
	$('#woot').click();
  }
})();



;(function(){
  API.on(API.ADVANCE,callback).trigger(API.ADVANCE);
  function callback(){
	$('#dj-button').click();
  }
})();
