'use strict';

(function () {

   var handlebars = require('handlebars');
   
   function drawGrid() {
      var grid = document.getElementById("flip-table-container");
      var source = $("#flip-table-template").html();
      var template = handlebars.compile(source);
      var context = {
         rows: [
            [{number:'71'},{img:'dog.png', number:'19'}],
            [{img:'cat.jpg', number:'71'},{number:'19'}],
            [{img:'santa.jpg', number:'13'},{number:'13'}],
            
         ]
      };
      var html = template(context);
      grid.innerHTML = html;
   }

   exports.drawGrid = drawGrid;
   
})();
