import $ from 'jquery';
import _ from 'lodash';
import {Game} from './classes/game';
import {Level} from './classes/level';

let level = new Level();
let newGame = new Game();

$('.orange').on('click', function(){
  newGame.Select('orange');
  console.log(newGame.clickedColor);
});

$('.blue').on('click', function(){
  newGame.Select('blue');
  console.log(newGame.clickedColor);
});

$('.green').on('click', function(){
  newGame.Select('green');
  console.log(newGame.clickedColor);
});


$('.yellow').on('click', function(){
  newGame.Select('yellow');
  console.log(newGame.clickedColor);
});

$('.start-button').on('click', function(event){
  event.preventDefault();
  newGame.gameStart();
  $('.start-button').addClass('disappear');
  level.nextStage();
  $('.level-count').html(`<span class="count">${level.stage}</span>`)
  newGame.Select();
  $('.score-count').html(`<span class="score">Score: ${level.score}</span>`)
  console.log('level: ' + level.stage);
  console.log(level.sequence);
  console.log('score: ' + level.score);
});
