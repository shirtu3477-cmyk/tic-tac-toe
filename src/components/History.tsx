import React from "react";
import { Typography, Box, Button } from "@mui/material";
import type { HistoryTurn } from "../types";

interface IHistoryProps {
  history: HistoryTurn[];
  setGameToPreviousMove: Function;
};

const History: React.FC<IHistoryProps> = ({
  history,
  setGameToPreviousMove,
}) => {
  return (
    <Box mx={10} width={200}>
      <Typography color="#68a1b8ff" variant="h4">
        Moves
      </Typography>
      {history.map((record, i) => (
        <Button key={i} onClick={() => setGameToPreviousMove(i)}>
          Player {record.player} in box {record.x},{record.y}
        </Button>
      ))}
    </Box>
  );
};

export default History;
