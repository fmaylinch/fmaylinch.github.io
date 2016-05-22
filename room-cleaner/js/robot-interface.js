
function RobotInterface(game) {
  
  var self = this;
  self.game = game;
  self.moveLimit = 1000;
  
  // To keep track of movements before displaying animation
  // Actually, we should separate internal logic from visuals
  // (It's like this class is the logic)
  self.fakeRobot = new Robot($('<div>'));
  self.numTilesCleaned = 0;
  self.successMessageDisplayed = false;
  self.cleningRandomRoom = false;

  self.nextTile = function() {
    var nextPosition = self.fakeRobot.nextPosition();
    var tile = self.game.room.getTile(nextPosition);
    return tile;
  };

  self.move = function() {
    
    self.checkMoveLimit();

    if (self.canMove()) {
      
      // console.log("Moving to " + JSON.stringify(self.fakeRobot.nextPosition()))
      self.fakeRobot.move();
      self.cleanCurrentTile();
      
    } else {
      // console.log("Can't move");
    }
    
    self.game.actions.push(function() {
      self.game.move();
    });
    
    if (self.cleningRandomRoom && self.isRoomClean() && !self.successMessageDisplayed) {
      self.game.actions.push(function() {
        self.successMessageDisplayed = true;
        $('#success-message').slideDown();
      });
    }
    
  };

  self.left = function() {

    self.checkMoveLimit();

    self.fakeRobot.rotateLeft();
    
    self.game.actions.push(function() {
      self.game.rotateLeft();
    });
  };

  self.right = function() {
    
    self.checkMoveLimit();

    self.fakeRobot.rotateRight();

    self.game.actions.push(function() {
      self.game.rotateRight();
    });
  };
  
  self.log = function(message) {
    
    self.game.actions.push(function() {
      console.log(message);
    });
  };
  
  self.canMove = function() {
    return self.nextTile() !== null;
  };
  
  self.isRoomClean = function() {
    return self.numTilesCleaned === self.game.room.numTilesToClean;
  };
  
  self.cleanCurrentTile = function() {
    
    var position = self.fakeRobot.position;
    var roomMap = self.game.room.roomMap;
    var state = roomMap[position.row][position.column];
    if (state === STATE_DIRTY) {
      roomMap[position.row][position.column] = STATE_CLEAN;
      self.numTilesCleaned++;
    }
  };
  
  self.checkMoveLimit = function() {
    self.moveLimit--;
    if (self.moveLimit < 0) {
      throw "Too many moves!";
    }
  }
}
