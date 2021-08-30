import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  PLAYER,
  OPPONENT,
} from "./constant";
import { evaluate } from "./evaluate";
import { isMovesLeft } from "./isMovesLeft";

export const minimax = (board: string[][], depth: number, isMax: boolean) => {
  const score = evaluate(board);

  // If Maximizer has won the game, return evaluated score
  if (score === 10) {
    return score;
  }
  // If Minimizer has won the game, return evaluated score
  if (score === -10) {
    return score;
  }

  // If there are no more moves and, no winner then it is a tie
  if (!isMovesLeft(board)) {
    return 0;
  }

  // If this maximizer's move
  if (isMax) {
    let best = -1000;
    // Traverse all cells
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        // Check if cell is empty
        if (board[i][j] === "") {
          // Make the move
          board[i][j] = PLAYER;

          // Call minimax recursively
          // and choose the maximum value
          best = Math.max(best, minimax(board, depth + 1, !isMax));

          // Undo the move
          board[i][j] = "";
        }
      }
    }
    return best;
  }

  // If this minimizer's move
  else {
    let best = 1000;
    // Traverse all cells
    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
      for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
        // Check if cell is empty
        if (board[i][j] === "") {
          // Make the move
          board[i][j] = OPPONENT;

          // Call minimax recursively and
          // choose the minimum value
          best = Math.min(best, minimax(board, depth + 1, !isMax));

          // Undo the move
          board[i][j] = "";
        }
      }
    }
    return best;
  }
};
