import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from "./constant";

export const isMovesLeft = (board: string[][]): boolean => {
  for (let i = 0; i < NUMBER_OF_ROWS; i++) {
    for (let j = 0; j < NUMBER_OF_COLUMNS; j++) {
      if (board[i][j] === "") {
        return true;
      }
    }
  }
  return false;
};
