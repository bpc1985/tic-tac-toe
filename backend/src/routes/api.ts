import express from "express";
import { isMovesLeft, evaluate, findBestMove } from "../helpers";

const router = express.Router();

router.post("/api", (req, res) => {
  const { boardData } = req.body;

  if (evaluate(boardData) > 0) {
    return res.send({ data: boardData, status: "You win!" });
  }

  const bestMove = findBestMove(boardData);
  if (bestMove.row !== -1) {
    const { row, col } = bestMove;
    boardData[row][col] = "o";
  }

  if (evaluate(boardData) < 0) {
    return res.send({ data: boardData, status: "You lose!" });
  }

  if (isMovesLeft(boardData)) {
    return res.send({ data: boardData, status: "" });
  } else {
    return res.send({ data: boardData, status: "Tie" });
  }
});

export { router as apiRouter };
