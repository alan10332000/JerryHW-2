$("#head").on('mouseenter touchstart', function(e) {
  var sound = new Audio("sounds/hit.mp3"); 
  $(this).attr("src","images/head2.jpg");
  if (e.pageX != undefined) {

    // 應該要寫在end 才不會出現太快
  	/* 扣血機制 */
  	var hp = Math.round($("div#inner-health").width() / $('div#inner-health').parent().width() * 100);
  	var hbar = $("div#inner-health");
  	if (hp > 0) {
      
  	  hbar.css("width","-=10%");
  	  if (hp <= 21) {
  	  	hbar.css("background-color", "#FF0000");
  	  } else if (hp <= 51) {
  	  	hbar.css("background-color", "#FF8800");
  	  } else if (hp <= 71) {
  	  	hbar.css("background-color", "#FFFF00");
  	  }
      /* 音效播放 */
      // 播放 blob object (?)
      //local variable = audio blob
      //local play
      sound.pause();
      sound.currentTime = 0;
      sound.play();
  	  /* 動畫顯示 */
      /* 創建物件 */
      var cl = 'a' + Math.floor((Math.random() * 100) + 1);
      var obj = "<div id=\"minus1\" class=\"" + cl + "\">-1</div>"
      var outer = $("div#outer-health");
      outer.after(obj);
      var $target = $("div." + cl);
      $target.css({
        left: e.pageX,
        top: e.pageY - 50
      });
      $target.show();
      $target.animate({ 'top': '-=70', 'opacity': 0}, "slow", function(){
        $target.remove();
      });
  	} else {
  		/* 沒血了 */
      //跳成就
      var sound_win = new Audio("sounds/sad.mp3");
      $("#boss").show();
      sound_win.pause();
      sound_win.currentTime = 0;
      sound_win.play();
  	}
  }
});

$("#head").on('mouseleave touchend', function() {
  $(this).attr("src","images/head.jpg");
});

$("li > a").on('mouseenter touchstart', function() {
  $(this).css('color', 'white');
});

$("li > a").on('mouseleave touchend', function() {
  $(this).css('color', '#2f2f2f');
});
/*
$("#head").on("taphold", function( event ) {

});*/

function load_audio () {

      document.querySelector('button').onclick = function () {
          audio.play();
      };
}