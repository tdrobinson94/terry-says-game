import _ from 'lodash';
let choices = ['orange', 'yellow', 'blue', 'green'];

class Level {
  constructor() {
    this.stage = 0;
    this.sequence = _.sampleSize(choices, 0);
    this.score = 0;
  }
  nextStage(){
    this.stage ++;
    let newColor = _.sampleSize(choices, 1);
    this.sequence = this.sequence.concat(newColor);
    // $().addClass('flash');
    this.score = ((this.score + 5) * 2) - 5;
  }

}

export {Level};
