import React from "react";
import { useStyles } from "./Board.style";
import type { PlayerType } from "../../types";
import { ButtonBase, GridLegacy as Grid, Box, Button } from "@mui/material";

interface IBoardProps {
  handleTurn: (boxId: number) => void;
  reset: () => void;
  board: (PlayerType | null)[];
}

const Board: React.FC<IBoardProps> = ({ handleTurn, reset, board }) => {
  const styles = useStyles();
  return (
    <Box style={styles.box}>
      <Box>
        <Button variant="contained" onClick={() => reset()}>
          reset
        </Button>
      </Box>
      <Grid container style={styles.grid}>
        {board.map((cell, i) => (
          <Grid
            item
            xs={4}
            key={i}
            style={styles.gridItem}
          >
            <ButtonBase
              onClick={() => handleTurn(i)}
              style={styles.square}
              color={cell === "X" ? "#d64584ff" : "#3c836eff"}
            >
              {cell}
            </ButtonBase>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Board;
