
/**
 * Handles the logic of the game in an abstract way
 */
class Board {
  constructor(){
    /* We have enums at home */
    /* enums at home :       */
    this.GameState = {
      INITIAL: 0,
      MIDGAME: 1,
      WIN:     2
    }
    
    /* Not using 0 because -0 = 0, and we want the direction to be an algebraic measure */
    this.Directions = {
      HORIZONTAL: 1,
      P_DIAGONAL: 2,
      N_DIAGONAL: 3
    }
    
    this.CellState = {
      HOLE: 0,
      NAIL: 1
    }
        
    this._reset();
  }
  
  /**
   *  Logs the game state in the console
   *
   *  @param table   uses console.table() instead of console.log()
   *  @param hole    the character to use to print a cell containing a hole
   *  @param nail    the character to use to print a cell containing a nail
   */
  log_state(table = false, hole='o', nail='+'){
    if(table){
      console.table(this.board_state);
      return;
    }
    
    let str = ""
    
    for(let i = 0; i < 5; i++){
      str += "\n"
      
      for(let j = 0; j < 5-i+1; j++){
        str += " ";
      }
      
      for(let j = 0; j < i+1; j++){
        /* TODO: stop being lazy and check using the enum */
        str += (this.board_state[i][j]?nail:hole) + " ";
      }
    }
    console.log(str);
    
  }
  
  /**
   * Does the initial move of removing a nail from the board
   *
   * @param row    The row value
   * @param col    The column value  
   * 
   * @return 0 for success, 1 for failure
   */
  initial_move(row, col){
    if(this.game_state != this.GameState.INITIAL){
      console.error("initial_move() can only be called once at the start of the game");
      return 1;
    }
    
    if(!this._remove_nail(row, col)){
      this.game_state = this.GameState.MIDGAME;
      return 0;
    }
    
    console.error(`initial_move: invalid coordinates (${row}, ${col})`);
    return 1;
  }
  
  /**
   * Moves the specified nail in the specified direction if the conditions are met
   * (See the game rules) 
   *
   * @param row        The row of the nail
   * @param col        The column of the nail
   * @param direction  The direction (algebraic measure)
   * 
   * @return 0 for success, 1 for failure
   */
  move(row, col, direction){
    if(this.game_state != this.GameState.MIDGAME){
      console.error("move() can only be called after removing a first screw with initial_move()");
      return 1;
    }
    
    if(this._get_relative(row, col, direction, 2) == this.CellState.NAIL){
      return 1
    }
    
    if(this._get_relative(row, col, direction) == this.CellState.HOLE){
      return 1
    }
    
    this._set_relative(row, col, direction, this.CellState.NAIL, 2)
    this._set_relative(row, col, direction, this.CellState.HOLE, 1)
    this._remove_nail(row, col);
    
    this.log_state();
    /* TODO: check for win */
    return 0;
  }
  
  
  /**
   * Resets the game
   * @private
   */
  _reset(){
    /* TODO: use the "enum", even though it looks more readable like this tbh */
    this.board_state = [    [1],
                           [1,1],
                          [1,1,1],
                         [1,1,1,1],
                        [1,1,1,1,1]  ]
                  
    this.game_state = this.GameState.INITIAL;
  }
  
  /**
   * Checks if a couple (row, col) is valid
   * @private
   *
   * @param row    The row value
   * @param col    The column value
   * 
   * @return 0 when valid, 1 otherwise
   */
  _check_row_col(row, col){
    if(row < 0 || row >= 5)
      return 1;
    
    if(col < 0 || col > row)
      return 1;
    
    return 0;
  }
  
  /**
   * Checks if a direction is valid
   * @private
   *
   * @param dir    The direction to check
   * 
   * @return 0 when valid, 1 otherwise
   */
  _check_direction(dir){
    /* TODO: maybe check using the actual "enum" ? */
    if(dir < 1 || dir > 3) return 1;
    return 0;
  }
  
  /**
   * Places a nail in the specified position
   * @private
   *
   * @param row    The row value
   * @param col    The column value  
   * 
   * @return 0 for success, 1 for failure
   */
  _place_nail(row, col){
    if(this._check_row_col(row, col))
      return 1;
   
    if(this.board_state[row][col] == 1)
      console.warn(`_place_nail: Nail already exists at (${row}, ${col})`);
    
    this.board_state[row][col] = 1;
    return 0;
  }
  
  /**
   * Removes a nail from the specified position
   * @private
   *
   * @param row    The row value
   * @param col    The column value  
   * 
   * @return 0 for success, 1 for failure
   */
  _remove_nail(row, col){
    if(this._check_row_col(row, col))
      return 1;
   
    if(this.board_state[row][col] == 0)
      console.warn(`_remove_nail: Tried to remove non-existant nail at (${row}, ${col})`);
    
    this.board_state[row][col] = 0;
    return 0;
  }

  /**
   * Gets the value of the steps-th cell from (row, col), in the direction specified
   * @private
   *
   * @param row        The row of the origin cell
   * @param col        The column of the origin cell
   * @param direction  The direction (algebraic measure)
   * @param steps      The number of steps in that direction
   * 
   * @return the value of the cell, or undefined if invalid parameters are given
   */
  _get_relative(row, col, direction, steps=1){
    if(this._check_row_col(row, col))
      return undefined;
    
    const abs_dir = Math.abs(direction);
    
    if(this._check_direction(abs_dir))
      return undefined;
      
    
    const displacement = (direction > 0 ? 1 : -1);
    
    /* TODO: check if steps is valid */
    switch(abs_dir){
    case this.Directions.HORIZONTAL:
      return this.board_state[row][col + steps * displacement]; 
    
    case this.Directions.P_DIAGONAL:
      return this.board_state[row + steps * displacement][col];
    
    case this.Directions.N_DIAGONAL:
      return this.board_state[row + steps * displacement][col + steps * displacement];
    }
  }
  
  /**
   * Sets the value of the steps-th cell from (row, col), in the direction specified
   * @private
   *
   * @param row        The row of the origin cell
   * @param col        The column of the origin cell
   * @param direction  The direction (algebraic measure)
   * @param value      The new cell value
   * @param steps      The number of steps in that direction
   * 
   * @return 0 for success, 1 for failure
   */
  _set_relative(row, col, direction, value, steps=1){
    if(this._check_row_col(row, col))
      return 1;
    
    const abs_dir = Math.abs(direction);
    
    if(this._check_direction(abs_dir))
      return 1;
      
    
    const displacement = (direction > 0 ? 1 : -1);
    
    /* TODO: check if steps is valid */
    switch(abs_dir){
    case this.Directions.HORIZONTAL:
      this.board_state[row][col + steps * displacement] = value; 
      break;
      
    case this.Directions.P_DIAGONAL:
      this.board_state[row + steps * displacement][col] = value;
      break;
      
    case this.Directions.N_DIAGONAL:
      this.board_state[row + steps * displacement][col + steps * displacement] = value;
      break;
    }
    
    return 0;
  }
}

