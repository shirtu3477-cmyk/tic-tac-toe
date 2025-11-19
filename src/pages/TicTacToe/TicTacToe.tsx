import Confetti from "react-confetti";
import React, { useState } from "react";
import { useStyles } from "./TicTacToe.style";
import type { PlayerType } from "../../types";
import Board from "../../components/Board/Board";
import { Box, Typography } from "@mui/material";
import History from "../../components/History/History";
import type { HistoryTurn } from "../../components/History/History.type";

const TicTacToe = () => {
  const styles = useStyles();
  const [history, setHistory] = useState<HistoryTurn[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [board, setBoard] = useState<(PlayerType | null)[]>(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState<PlayerType>("X");

  const addToHistory = (record: HistoryTurn): void => {
    const updatedHistory = [...history];
    updatedHistory.push(record);
    setHistory(updatedHistory);
  };

  const handleTurn = (boxId: number): void => {
    if (!board[boxId]) {
      const updatedBoard = [...board];
      updatedBoard[boxId] = turn;
      setBoard(updatedBoard);
      addToHistory({
        id: history.length,
        x: Math.floor(boxId / 3),
        y: boxId % 3,
        player: turn,
      });
      setTurn(turn === "X" ? "O" : "X");
      const result = isGameEnded(updatedBoard);

      if (result || result === null) endGame(result);
    }
  };

  const endGame = (result: PlayerType | null): void => {
    if (result) {
      setGameOver(true);
      setMessage(`Player ${result} WINS!`);
    } else {
      setMessage("No winners this time :(");
    }
  };

  const reset = (): void => {
    setBoard(Array(9).fill(null));
    setHistory([]);
    setGameOver(false);
    setMessage("");
  };

  const setGameToPreviousMove = (index: number): void => {
    const updatedHistory = history.filter((rec, i) => i <= index);
    const movesToCancel = history.filter((rec, i) => i > index);
    setHistory(updatedHistory);

    const updatedBoard = [...board];
    movesToCancel.forEach((move) => {
      updatedBoard[move.x * 3 + move.y] = null;
    });

    setBoard(updatedBoard);
    setTurn(history[index].player === "X" ? "O" : "X");
    setGameOver(false);
    setMessage("");
  };

  const isGameEnded = (
    updatedBoard: (PlayerType | null)[]
  ): PlayerType | undefined | null => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let isBoardFull = true;

    for (const [a, b, c] of winningLines) {
      if (
        updatedBoard[a] === null ||
        updatedBoard[b] === null ||
        updatedBoard[c] === null
      )
        isBoardFull = false;

      if (
        updatedBoard[a] &&
        updatedBoard[a] === updatedBoard[b] &&
        updatedBoard[a] === updatedBoard[c]
      )
        return updatedBoard[a];
    }

    return isBoardFull ? null : undefined;
  };

  return (
    <Box style={styles.root}>
      <Typography style={styles.title} variant="h1">
        Tic Tac Toe
      </Typography>
      <Box style={styles.game}>
        <Box>
          <Board reset={reset} handleTurn={handleTurn} board={board} />
        </Box>
        <Box>
          <History
            setGameToPreviousMove={setGameToPreviousMove}
            history={history}
          />
          <Typography style={styles.displayMessage}>
            {message}
          </Typography>
        </Box>
      </Box>
      {isGameOver && <Confetti style={styles.confetti} />}
    </Box>
  );
};

export default TicTacToe;
