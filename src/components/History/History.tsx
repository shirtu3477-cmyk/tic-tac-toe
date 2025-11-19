import React from "react";
import { useStyles } from "./History.style";
import type { HistoryTurn } from "./History.type";
import { Typography, Box, Button } from "@mui/material";

interface IHistoryProps {
  history: HistoryTurn[];
  setGameToPreviousMove: (index: number) => void;
}

const History: React.FC<IHistoryProps> = ({
  history,
  setGameToPreviousMove,
}) => {
  const styles = useStyles();

  return (
    <Box style={styles.box}>
      <Typography style={styles.title} variant="h4">
        Moves
      </Typography>
      {history.map((record, i) => (
        <Button key={record.id} onClick={() => setGameToPreviousMove(i)}>
          Player {record.player} in box {record.x},{record.y}
        </Button>
      ))}
    </Box>
  );
};

export default History;
