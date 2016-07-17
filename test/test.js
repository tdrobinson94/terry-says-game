// Import Chai
import chai from 'chai';

// Import Any Files to Test
import {Level} from '../src/js/classes/level';
import {Game} from '../src/js/classes/game';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe("The game called Terry Say's", function () {

  describe("Testing the Creation of a Stage", function (){

    it("should be an instance of Stage", function (){
      let level = new Level();
      expect(level).to.be.an.instanceof(Level);

    });

    it("should begin on stage 0", function (){

      let level = new Level();
      expect(level.stage).to.equal(0);

    });

    it("should be on stage 1", function(){
      let level = new Level();
      level.nextStage();
      expect(level.stage).to.equal(1);

    });

    it("should be on stage 3", function(){
      let level = new Level();
      level.nextStage();
      level.nextStage();
      level.nextStage();
      expect(level.stage).to.equal(3);

    });

    it("should create 0 random color", function(){
      let level = new Level();
      expect(level.sequence.length).to.equal(0);

    });

    it("should create a sequence of 1 random color", function(){
      let level = new Level();
      level.nextStage();
      expect(level.sequence.length).to.equal(1);

    });

    it("should create a sequence of 4 random color", function(){
      let level = new Level();
      level.nextStage();
      level.nextStage();
      level.nextStage();
      level.nextStage();
      expect(level.sequence.length).to.equal(4);

    });

    it("should begin with a score of 0", function (){

      let level = new Level();
      expect(level.score).to.equal(0);

    });

    it("should have a score of 5", function (){

      let level = new Level();
      level.nextStage();
      expect(level.score).to.equal(5);

    });

    it("should have a score of 35", function (){

      let level = new Level();
      level.nextStage();
      level.nextStage();
      level.nextStage();
      expect(level.score).to.equal(35);

    });

  });

  describe("Testing the Creation of a Game", function(){

    it("should be an instance of Game", function(){
      let newGame = new Game();
      expect(newGame).to.be.an.instanceof(Game);

    });

    it("should have a game status of false on the pages first load", function(){
      let newGame = new Game();
      expect(newGame.status).to.equal(false);
    });

    it("should change the game status to true", function(){
    let newGame = new Game();
    newGame.gameStart();
    expect(newGame.status).to.equal(true);

    });

    it("should change the game status to false", function(){
      let newGame = new Game();
      newGame.gameOver();
      expect(newGame.status).to.equal(false)

    });

    it("change level to 1 when status is true", function(){
      let level = new Level();
      let newGame = new Game();
      level.nextStage();
      newGame.gameStart();
      expect(newGame.status).to.equal(true);
      expect(level.stage).to.equal(1);
    });

  });

});
