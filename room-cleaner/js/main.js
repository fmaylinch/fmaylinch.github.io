
var currentRoomMap;

$(document).ready(function() {

  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    continueComments: "Enter"
  });
  
  // Init levels
  var level = $("#level");
  for (var i=1; i<=MAX_LEVEL; i++) {
    level.append($('<option>').val(i).text('Level ' + i));
  }
  level.val(1);

  $("#run").click(function() {
    
    console.log("Preparing random room to try the robot!");
    resetGame(true);
    
    var error = tryCode(editor);
    
    if (!error && robot.isRoomClean()) {
      
      self.game.actions.push(function() {
        onRoomCompleted();
      });
    }

  });

  $("#test").click(function() {
    console.log("Testing code!");
    tryCode(editor);
  });
  
  $("#reset").click(function() {
    resetGame(false);
  });
  
  resetGame(true);
});


function tryCode(editor) {
  try {
    $('#error-message').hide();
    eval(editor.doc.getValue());
  } catch(e) {
    $('#error-message').text('Oops: ' + e).slideDown();
    return e;
  }
}


function onRoomCompleted() {

  var message = '<strong>Well done!</strong>';

  var level = $("#level");
  var value = parseInt(level.val());
  if (value+1 <= MAX_LEVEL) {
    level.val(value+1);
    message += " Now try level " + (value+1) + "!";
  } else {
    message += " You're a clean code master!";
  }

  $('#success-message').html(message).slideDown();
}


function resetGame(regenerateRoom) {

  $('#success-message').hide();
  $('#error-message').hide();
  
  if (window.game) {
    window.game.stop();
  }
  
  if (regenerateRoom) {
    var level = parseInt($('#level').val());
    generateRoomForLevel(level);
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


function generateRoomForLevel(level) {
  
  var numRows;
  var numColumns;
  
  if (level === 1) {
    numRows = 2;
    numColumns = 2;
  } else if (level === 2) {
    numRows = getRandomInt(2,4);
    numColumns = getRandomInt(2,4);
  } else if (level === 3) {
    numRows = getRandomInt(3,4);
    numColumns = getRandomInt(3,4);
  }
  
  currentRoomMap = generateRoom(numRows, numColumns);
  
  if (level === 3) {
    var emptyCorner = getRandomInt(1,3);
    if (emptyCorner === 1) {
      currentRoomMap[0][numColumns-1] = STATE_EMPTY;
    } else if (emptyCorner === 2) {
      currentRoomMap[numRows-1][numColumns-1] = STATE_EMPTY;
    } else if (emptyCorner === 3) {
      currentRoomMap[numRows-1][0] = STATE_EMPTY;
    }
  }
}


function generateRoom(numRows, numColumns) {
  
  var roomMap = [];
  
  for (var i=0; i<numRows; i++) {
    
    var rowArray = [];
    
    for (var j=0; j<numColumns; j++) {
      rowArray.push(STATE_DIRTY);
    }
    
    roomMap.push(rowArray);
  }
  
  return roomMap;
}