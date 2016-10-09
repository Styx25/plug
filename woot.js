API.chatLog("AutoWoot je zapnutý! Verzia 1.1.0");

;(function(){
  API.on(API.ADVANCE,callback).trigger(API.ADVANCE);
  function callback(){
	$('#woot').click();
  }
})();



;(function(){
  API.on(API.ADVANCE,call).trigger(API.ADVANCE);
  function call(){
	$('#dj-button').click();
  }
})();
