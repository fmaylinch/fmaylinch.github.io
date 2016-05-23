
function Robot(img, tileSize) {
  
  var self = this;
  self.position = {row:0, column:0};
  self.img = img;
  self.angle = 90;
  self.animationTime = 800;
  self.tileSize = tileSize;
  
  img.show();
  img.css({top: "0px", left: "0px"});
  img.css({transform: "rotate(90deg)"});
  
  self.rotateRight = function() {
    var from = self.angle;
    var to = self.angle + 90;
    self.angle = to < 360 ? to : to-360;
    rotate(self.img, from, to, self.animationTime/1.5);
  }
  
  self.rotateLeft = function() {
    var from = self.angle;
    var to = self.angle - 90;
    self.angle = to >= 0 ? to : to+360;
    rotate(self.img, from, to, self.animationTime/1.5);
  }
  
  self.nextPosition = function() {
    
    var nextPosition = {
      row: self.position.row,
      column: self.position.column
    };

    switch (self.angle % 360) {
      case 0:
        nextPosition.row--; break;
      case 90:
        nextPosition.column++; break;
      case 180:
        nextPosition.row++; break;
      case 270:
        nextPosition.column--; break;
    }
    
    return nextPosition;
  };
  
  self.move = function() {
    
    self.position = self.nextPosition();
    self.animateToCurrentPosition();
  };

  /* 
   * Animate forward and backwards a little bit
   * to show that robot can't move
   */
  self.animateCantMove = function() {
    
    var left0 = self.position.column * self.tileSize;
    var top0 = self.position.row * self.tileSize;

    var nextPosition = self.nextPosition();

    var left1 = nextPosition.column * self.tileSize;
    var top1 = nextPosition.row * self.tileSize;

    var fraction = 0.2;
    
    var left = (left1 - left0) * fraction + left0;
    var top = (top1 - top0) * fraction + top0;
    
    var animation1 = {left: left + "px", top: top + "px"};
    var animation2 = {left: left0 + "px", top: top0 + "px"};

    var time = self.animationTime * fraction * 1.5;
    
    self.img.animate(animation1, time, function() {
      self.img.animate(animation2, time);
    });
  };

  self.animateToCurrentPosition = function() {
    
    var left = self.position.column * self.tileSize;
    var top = self.position.row * self.tileSize;
    
    var animation = {left: left + "px", top: top + "px"};
    
    self.img.animate(animation, self.animationTime);
  };
}
