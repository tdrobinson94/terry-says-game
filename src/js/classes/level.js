import _ from 'lodash';
import $ from 'jquery';
let choices = ['red', 'blue', 'green', 'yellow'];

class Level {
  constructor() {
    this.stage = 0;
    this.sequence = [];
    this.score = 0;
  }
  nextStage(){
    this.stage ++;
    let newColor = _.sampleSize(choices, 1);
    this.sequence = this.sequence.concat(newColor);
    this.flashColors();
    this.score = ((this.score + 5) * 2) - 5;
    $('.level-count').html(`<span class="count">${this.stage}</span>`);
    $('.score-count').html(`<span class="score">Score: ${this.score}</span>`);
  }
  flashColors(){
    this.sequence.forEach(function(color, index){
      setTimeout(function(){
        $(`.${color}`).addClass('flash');
        setTimeout(function () {
          $(`.${color}`).removeClass('flash');
        }, 500);
      }, 750 * index + 500);
    });
  }
}

export {Level};
