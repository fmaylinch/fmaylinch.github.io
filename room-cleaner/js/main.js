
var currentRoomMap;

$(document).ready(function() {

  var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    matchBrackets: true,
    continueComments: "Enter"
  });
  
  initLevelSelect(MAX_LEVEL);

  $("#run").click(function() {
    
    resetGame(true);
    
    var error = tryCode(editor);
    
    if (!error) {
      if (robot.isRoomClean()) {
        self.game.actions.push(function() {
          onRoomCompleted();
        });        
      } else {
        self.game.actions.push(function() {
          onRoomNotCompleted();
        });        
      }
    }

  });

  $("#test").click(function() {
    tryCode(editor);
  });
  
  $("#reset").click(function() {
    resetGame(false);
  });
  
  resetGame(true);
});


function tryCode(editor) {
  try {
    $('.alert').hide();
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

function onRoomNotCompleted() {

  $('#warning-message').text("You need to clean the whole room!").slideDown();
}


function resetGame(regenerateRoom) {

  $('.alert').hide();
  
  if (window.game) {
    window.game.stop();
  }
  
  if (regenerateRoom) {
    var level = parseInt($("#level").val());
    currentRoomMap = generateRoomForLevel(level);
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
  } else if (level === 4) {
    numRows = getRandomInt(4,5);
    numColumns = getRandomInt(4,5);
  } else if (level >= 5) {
    numRows = getRandomInt(6,7);
    numColumns = getRandomInt(6,7);
  }
  
  var roomMap = generateRoom(numRows, numColumns);
  
  // empty corners
  var emptyCorners = ['top-right', 'bottom-right', 'bottom-left'];
  shuffle(emptyCorners);
    
  // Empty corner of 1x1
  if (level >= 3 && level != 5) {
    
    var emptyCorner = emptyCorners.shift();
    
    if (emptyCorner === 'top-right') {
      emptyRect(roomMap, 0, numColumns-1, 1, 1);
    } else if (emptyCorner === 'bottom-right') {
      emptyRect(roomMap, numRows-1, numColumns-1, 1, 1);
    } else if (emptyCorner === 'bottom-left') {
      emptyRect(roomMap, numRows-1, 0, 1, 1);
    }
    
  }
  
  // Empty corner of 2x2
  if (level >= 4 && level != 5) {
    
    var emptyCorner = emptyCorners.shift();
    
    if (emptyCorner === 'top-right') {
      emptyRect(roomMap, 0, numColumns-2, 2, 2);
    } else if (emptyCorner === 'bottom-right') {
      emptyRect(roomMap, numRows-2, numColumns-2, 2, 2);
    } else if (emptyCorner === 'bottom-left') {
      emptyRect(roomMap, numRows-2, 0, 2, 2);
    }
  }
  
  // Since it's inner, we can also use top-left
  // Won't touch the starting tile
  emptyCorners.push('top-left');
  shuffle(emptyCorners);
  
  // Empty rect of 2x2 inside the room
  if (level >= 5) {
    
    var emptyCorner = emptyCorners.shift();

    if (emptyCorner === 'top-right') {
      emptyRect(roomMap, 1, numColumns-3, 2, 2);
    } else if (emptyCorner === 'bottom-right') {
      emptyRect(roomMap, numRows-3, numColumns-3, 2, 2);
    } else if (emptyCorner === 'bottom-left') {
      emptyRect(roomMap, numRows-3, 1, 2, 2);
    } else if (emptyCorner === 'top-left') {
      emptyRect(roomMap, 1, 1, 2, 2);
    }
  }
  
  return roomMap;
}


function emptyRect(roomMap, row, col, numRows, numCols) {
  
  for (var r=0; r<numRows; r++) {
    for (var c=0; c<numCols; c++) {
      try {
        roomMap[row+r][col+c] = STATE_EMPTY;
      } catch (e) {
        console.error(e);
        console.log("row", row, "col", col);
        console.log(roomMap);
      }
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

function initLevelSelect(maxLevel) {
  
  var level = $("#level");
  
  for (var i=1; i<=maxLevel; i++) {
    level.append($('<option>').val(i).text('Level ' + i));
  }
  
  level.val(1);
}