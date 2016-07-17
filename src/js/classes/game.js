import {Level} from './level';
import $ from 'jquery';

class Game {
  constructor(level) {
    this.status = false;
    this.level = new Level();
    this.clickedColor = [];
    this.clickedIndex = 0;
  }
  gameStart(){
    this.status = true;
  }
  gameOver(){
    this.status = false;
  }
  Select(color){
  if(this.status == false){
    alert('Please click Start to begin');
  } else if (this.status == true){
    if (this.level.sequence[this.clickedIndex] == color){
      this.clickedColor.push(color);
      this.clickedIndex ++;
      if(this.level.sequence.length == this.clickedColor.length){
        this.level.nextStage();
        this.clickedIndex = 0;
        this.clickedColor = [];
      }
    } else{
      this.gameOver();
      this.gameStart();

      }
    }
  }
}

export {Game};