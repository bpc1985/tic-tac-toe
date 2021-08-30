import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
  PLAYER,
  OPPONENT,
} from "./constant";

export const evaluate = (b: string[][]): number => {
  // Checking for Rows for X or O victory.
  for (let row = 0; row < NUMBER_OF_ROWS; row++) {
    if (b[row][0] === b[row][1] && b[row][1] === b[row][2]) {
      if (b[row][0] === PLAYER) {
        return +10;
      } else if (b[row][0] === OPPONENT) {
        return -10;
      }
    }
  }

  // Checking for Columns for X or O victory.
  for (let col = 0; col < NUMBER_OF_COLUMNS; col++) {
    if (b[0][col] === b[1][col] && b[1][col] === b[2][col]) {
      if (b[0][col] === PLAYER) {
        return +10;
      } else if (b[0][col] === OPPONENT) {
        return -10;
      }
    }
  }

  // Checking for Diagonals for X or O victory.
  if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
    if (b[0][0] === PLAYER) {
      return +10;
    } else if (b[0][0] === OPPONENT) {
      return -10;
    }
  }

  if (b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
    if (b[0][2] === PLAYER) {
      return +10;
    } else if (b[0][2] === OPPONENT) {
      return -10;
    }
  }

  // Otherwise
  return 0;
};
