import {Level} from './level';
import $ from 'jquery';

class Game {
  constructor() {
    this.status = false;
    this.started = false;
    this.level = new Level();
    this.clickedColor = '';
    this.selectedColors = [];
    this.sequenceIndex = 0;
    // this.clickedIndex = 1;
  }
  gameStart(){
    this.status = true;
    this.started = true;
    this.level = new Level();
    this.selectedColors = [];
    this.sequenceIndex = 0;
    this.clickedColor = '';
    $('.game-over').addClass('disappear');
    this.level.nextStage();
  }
  gameOver(){
    this.status = false;
    $('.game-over').removeClass('disappear').html(`<span class="game-over-text">GAME OVER</span>`);
    $('.start-button').removeClass('disappear').html(`<button class="start-button">Play<br>Again</button>`);
  }
  Select(color){
    this.clickedColor = color;
    console.log(this.clickedColor);
    this.Check();
  }
  Check(){
    if(this.status == true){
      if (this.level.sequence[this.sequenceIndex] == this.clickedColor){
        this.selectedColors.push(this.clickColor);
        this.sequenceIndex ++;
        if(this.level.sequence.length == this.selectedColors.length){
          this.level.nextStage();
          console.log('sequence:',this.level.sequence);
          this.sequenceIndex = 0;
          this.clickedColor = '';
          this.selectedColors = [];
        }
      } else {
        this.gameOver();
      }
    }
  }
}

export {Game};
