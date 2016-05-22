
function Room(roomMap, rowsDiv, tileSize) {

  var self = this;
  self.rowsDiv = rowsDiv;
  self.roomMap = copyRoom(roomMap);
  self.numTilesToClean = 0;
  
  createVisualTiles();
  
  function createVisualTiles() {
    
    for (var row=0; row < roomMap.length; row++) {

      var rowDiv = $('<div>').addClass("tile-row");

      for (var tile=0; tile < roomMap[row].length; tile++) {

        var state = roomMap[row][tile];
        
        var tileDiv = $('<div>')
          .css({width: tileSize+'px', height: tileSize+'px'})
          .addClass("tile")
          .addClass(getTileClass(state));

        rowDiv.append(tileDiv);
        
        if (state === STATE_DIRTY) {
          self.numTilesToClean++;
        }
      }
      rowsDiv.append(rowDiv);
    }
  }
  
  function getTileClass(state) {
    switch (state) {
      case STATE_DIRTY: return "tile-dirty";
      case STATE_CLEAN: return "tile-clean";
      case STATE_EMPTY: return "tile-none";
    }
  }
  
  /**
   * Copies the room so we can modify it without
   * altering the original.
   */
  function copyRoom(roomMap) {
    
    var copy = [];
    for (var row=0; row < roomMap.length; row++) {
      var rowArray = [];
      for (var tile=0; tile < roomMap[row].length; tile++) {
        rowArray.push(roomMap[row][tile]);
      }
      copy.push(rowArray);
    }
    return copy;
  }
  
  self.turnTileClean = function(position) {
    var tile = self.getTile(position);
    tile.removeClass("tile-dirty").addClass("tile-clean");
  }

  self.getTile = function(position) {
  
    var rows = self.rowsDiv.children();
    if (position.row >= 0 && position.row < rows.length) {
      var columns = rows.eq(position.row).children();
      if (position.column >= 0 && position.column < columns.length) {
        var tile = columns.eq(position.column);
        if (!tile.hasClass("tile-none")) {
          return tile;
        }
      }
    }
    return null;
  };

}
