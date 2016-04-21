'use strict';

(function(){

   require('bootstrap');
   var clicker = require('./click');
   var grid = require('./grid');
   
   grid.drawGrid();
   clicker.initClickFunctions();

}());
