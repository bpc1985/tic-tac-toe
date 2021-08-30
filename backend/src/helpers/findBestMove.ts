import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  PLAYER,
  OPPONENT,
} from "./constant";
import { minimax } from "./minimax";

interface IPosition {
  row: number;
  col: number;
}

export const findBestMove = (board: string[][]): IPosition => {
  let bestVal = -1000;
  const bestMove = {
    row: -1,
    col: -1,
  };

  // Traverse all cells, evaluate minimax function for all empty cells
  // And return the cell with optimal value.
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      // Check if cell is empty
      if (board[i][j] === "") {
        // Make the move
        board[i][j] = PLAYER;

        // compute evaluation function for this move.
        let moveVal = minimax(board, 0, false);

        // Undo the move
        board[i][j] = "";

        // If the value of the current move
        // is more than the best value, then update best
        if (moveVal > bestVal) {
          bestMove.row = i;
          bestMove.col = j;
          bestVal = moveVal;
        }
      }
    }
  }

  return bestMove;
};
