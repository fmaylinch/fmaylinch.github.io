
function Game(room, robot) {
  
  var self = this;
  self.room = room;
  self.robot = robot;
  self.actions = [];
  self.actionTime = 1000;
  self.started = false;
  
  
  self.stop = function() {
    self.actions = [];
    self.started = false;
    self.robot.img.remove();
  }
  
  self.start = function() {
    
    self.cleanCurrentTile();
    
    var actionsLoop = function() {
            
      setTimeout(function() {
        
        if (!self.started) return;
        
        self.cleanCurrentTile();

        var action = self.actions.shift();
        if (action) {
          action();
        }
        
        // console.log("Run action? " + !!action);
        
        actionsLoop();
        
      }, self.actionTime);
      
    };
    
    self.started = true;
    actionsLoop(); 
  };
  
  self.cleanCurrentTile = function() {
    self.room.turnTileClean(self.robot.position);
  };
  
  self.nextTile = function() {
    var nextPosition = self.robot.nextPosition();
    var tile = self.room.getTile(nextPosition);
    return tile;
  }
  
  self.move = function() {
    if (self.nextTile()) {
      self.robot.move();
    } else {
      self.robot.animateCantMove();
      // console.log("Can't move to: " + JSON.stringify(nextPosition));
    }
  }
  
  self.rotateRight = function() {
    self.robot.rotateRight();
  }
  
  self.rotateLeft = function() {
    self.robot.rotateLeft();
  }
  
}
