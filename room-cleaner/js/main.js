
var STATE_DIRTY = '.';
var STATE_CLEAN = 'o';
var STATE_EMPTY = ' ';

var currentRoomMap;


$(document).ready(function() {

  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    continueComments: "Enter"
  });
  
  // Init levels
  var level = $("#level");
  for (var i=1; i<=6; i++) {
    level.append($('<option>').val(i).text('Level ' + i));
  }
  level.val(1);

  $("#run").click(function() {
    console.log("Preparing random room to try the robot!");
    resetGame(true);
    window.robot.cleningRandomRoom = true;
    eval(editor.doc.getValue());
    window.robot.cleningRandomRoom = false;
  });

  $("#test").click(function() {
    console.log("Testing code!");
    window.robot.cleningRandomRoom = false;
    eval(editor.doc.getValue());
  });
  
  $("#reset").click(function() {
    resetGame(false);
  });
  
  resetGame(true);
});


function resetGame(regenerateRoom) {

  $('#success-message').hide();
  
  if (window.game) {
    window.game.stop();
  }
  
  if (regenerateRoom) {
    var level = parseInt($('#level').val());
    generateRoom(level);
  }
  
  var columns = getMaxColumns(currentRoomMap);
  var tileSize = columns >= 10 ? 40 : (columns >= 6 ? 60 : 80);
  
  var rowsDiv = $("#rows-container");
  rowsDiv.empty();
  
  var room = new Room(currentRoomMap, rowsDiv, tileSize);
  
  var robotImg = $('<img src="roomba.png" id="robot">');
  robotImg.css('width', tileSize + 'px');
  $('#game-container').append(robotImg);
  
  window.game = new Game(room, new Robot(robotImg, tileSize));
  game.start();
  
  var robot = new RobotInterface(game);
  robot.cleanCurrentTile();
  window.robot = robot; // so it is accessible from console

  console.log("Robot prepared!");
}

function getMaxColumns(roomMap) {
  
  return roomMap
    .map(function(row) { return row.length;})
    .reduce(function(a,b) { return a>b ? a : b; });
}

function generateRoom(level) {
    
  var size = level + 1;
  
  currentRoomMap = [];
  
  var numRows = getRandomInt(size, size+1);
  var numTiles = getRandomInt(size, size+1);

  // Break points to vary row width
  
  var levelZero = level-1; // Zero based
  var breakPointLevel = levelZero % 3;

  var breakPoint1 = -1;
  var breakPoint2 = -1;
  var breakPoint3 = Math.floor(numRows/2);
  
  if (breakPointLevel === 1) {
    breakPoint1 = Math.floor(numRows/2);
  } else if (breakPointLevel === 2) {
    breakPoint1 = Math.floor(numRows/3);
    breakPoint2 = Math.floor(numRows*2/3);
  } else if (level >= 4) {
    breakPoint1 = Math.floor(numRows/2);
  }
  
  var randomBrk;
  
  for (var i=0; i<numRows; i++) {
    
    var rowArray = [];
    
    if (i === breakPoint1) {
      randomBrk = getRandomInt(0, 1) == 0 ? -1 : 1;
      numTiles += (level - 1) * randomBrk;
    } else if (i === breakPoint2) {
      numTiles += (level - 1) * (-randomBrk);
    }
    
    for (var j=0; j<numTiles; j++) {
      var tile = '.';
      // Empty tile for level >= 4
      if (level >= 4 && i === breakPoint3 && j === breakPoint1) {
        tile = ' ';
      }
      rowArray.push(tile);
    }
    currentRoomMap.push(rowArray);
  }
}
