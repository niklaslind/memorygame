'use strict';


// Rules:
// not is flipped:
//    - 0 open: flip
//    - 1 open: flip
//    - +2 open: close + count++ + flip
// flop: close


(function () {

   var _ = require('lodash');
   
   function initClickFunctions() {
      $('.click').click( click );
   }

   var tries = 0;
   function click() {
      var flipped = isFlipped( $(this).attr("class"));
      var openTiles = $('.open');
      var numberOfOpen = openTiles.length;
      if ( numberOfOpen === 2 ) {
         flopAll();
         tries++;         
      } else if (!flipped) {
         $(this).addClass('flip');
         $(this).addClass('open');
         if (isCorrect()) {
            $('.open').addClass('done');
            $('.open').removeClass('open');
            success();
         }
         isWrong();
      }
   }

   function isFlipped(classes) {
      return classes.indexOf('flip') > -1;
   }

   function isCorrect() {
      var o = $('.open');      
      return ((o.length === 2) && (o[0].getAttribute('data-num') === o[1].getAttribute('data-num')));
   }

   function isWrong() {
      var o = $('.open');      
      if ((o.length === 2) && (o[0].getAttribute('data-num') !== o[1].getAttribute('data-num'))){
         vibrateOnError();
         $('.open').addClass('shake-horizontal shake-constant');
      }
   }

   var hasClass = _.curry(function(className, element) {
      console.log('has-num',element);
   });
   
   function flopAll() {
      $('.open').removeClass('flip');
      $('.open').removeClass('open');
      $('.click').removeClass('shake-constant');
      $('.click').removeClass('shake-horizontal');
   }

   var score=1;
   function success() {
//      
   }


   function vibrateOnError() {
      if ("vibrate" in navigator) {
         navigator.vibrate(1000);
      }
   }
   
   var count=0;
   var scoreContainer = document.getElementById("score-container");
   function timer() {
      scoreContainer.innerHTML = "Time: "+score++;
      setTimeout(timer, 1000);
   }

   timer();
   
   exports.initClickFunctions = initClickFunctions;

}());

