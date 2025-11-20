import Confetti from "react-confetti";
import React, { useState } from "react";
import { useStyles } from "./tic-tac-toe.style";
import { Box, Typography } from "@mui/material";
import Board from "../../components/Board/Board";
import { isGameEnded } from "./tic-tac-toe.utility";
import { PlayerType } from "../../consts/playertype";
import History from "../../components/History/History";
import type { HistoryTurn } from "../../components/History/History.type";

const TicTacToe: React.FC = () => {
  const styles = useStyles();
  const [message, setMessage] = useState<string>("");
  const [isGameOver, setGameOver] = useState<boolean>(false);
  const [historyBoards, setHistoryBoards] = useState<(PlayerType | null)[][]>([
    Array(9).fill(null),
  ]);
  const board = historyBoards[historyBoards.length - 1];
  
  const TURNS = [PlayerType.O, PlayerType.X];
  const turn = TURNS[historyBoards.length % 2];
  
  let history: HistoryTurn[] = [];
  historyBoards.forEach((curr, index) => {
    const prev = historyBoards[index - 1];
    curr.forEach((cell, i) => {
      
      if (cell && prev && prev[i] != cell) {
        history.push({
          id: index,
          player: cell,
          x: Math.floor(i / 3),
          y: i % 3,
        });
      }
    });
  });

  const handleTurn = (boxId: number): void => {
    if (!board[boxId]) {
      const updatedBoard = [...board];
      updatedBoard[boxId] = turn;
      const updatedHistory = [...historyBoards];
      updatedHistory.push(updatedBoard);
      setHistoryBoards(updatedHistory);
      const result = isGameEnded(updatedBoard);

      if (result) endGame(result);
    }
  };

  const endGame = (result: PlayerType | true): void => {
    if (result === PlayerType.X || result === PlayerType.O) {
      setGameOver(true);
      setMessage(`Player ${result} WINS!`);
    } else {
      setMessage("No winners this time :(");
    }
  };

  const reset = (): void => {
    setHistoryBoards([Array(9).fill(null)]);
    setGameOver(false);
    setMessage("");
  };

  const setGameToPreviousMove = (index: number): void => {
    const updatedHistory = historyBoards.slice(0, index + 1);
    setHistoryBoards(updatedHistory);

    setGameOver(false);
    setMessage("");
  };

  return (
    <Box style={styles.root}>
      <Typography style={styles.title} variant="h1">
        Tic Tac Toe
      </Typography>
      <Box style={styles.game}>
        <Box>
          <Board
            isGameOver={isGameOver}
            reset={reset}
            handleTurn={handleTurn}
            board={board}
          />
        </Box>
        <Box>
          <History
            setGameToPreviousMove={setGameToPreviousMove}
            history={history}
          />
          <Typography style={styles.displayMessage}>{message}</Typography>
        </Box>
      </Box>
      {isGameOver && <Confetti style={styles.confetti} />}
    </Box>
  );
};

export default TicTacToe;
