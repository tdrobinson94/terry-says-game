import $ from 'jquery';
import _ from 'lodash';
import {Game} from './classes/game';
import {Level} from './classes/level';

let level = new Level();
let newGame = new Game();

$('.red').on('click', function(){
  newGame.Select('red');
});

$('.blue').on('click', function(){
  newGame.Select('blue');
});

$('.green').on('click', function(){
  newGame.Select('green');
});


$('.yellow').on('click', function(){
  newGame.Select('yellow');
});

let color = newGame.ClickedColor;
$(window).on('click', function(event){
  event.preventDefault();
  if(newGame.started == false){
    alert('Please click start to begin!!!');
  }
});

$('.start-button').on('click', function(event){
  event.preventDefault();
  newGame.gameStart();
  $('.start-button').addClass('disappear');
  console.log('level: ' + newGame.level.stage);
  console.log('score: ' + newGame.level.score);
  console.log('sequence:', newGame.level.sequence);
});
