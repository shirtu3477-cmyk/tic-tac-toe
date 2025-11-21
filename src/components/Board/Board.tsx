import React from "react";
import { useStyles } from "./board.style";
import { playerColor } from "../../styles/theme";
import { PlayerType } from "../../consts/playertype";
import { ButtonBase, GridLegacy as Grid, Box, Button } from "@mui/material";

interface IBoardProps {
  handleTurn: (boxId: number) => void;
  reset: () => void;
  board: (PlayerType | null)[];
  isGameOver: boolean
}

const Board: React.FC<IBoardProps> = ({ handleTurn, reset, board, isGameOver }) => {
  const styles = useStyles();
  return (
    <Box style={styles.box}>
      <Box>
        <Button style={styles.resetBtn} variant="contained" onClick={() => reset()}>
          reset
        </Button>
      </Box>
      <Grid container style={styles.grid}>
        {board.map((cell, i) => (
          <Grid item xs={4} key={i} style={styles.gridItem}>
            <ButtonBase
            disabled={isGameOver}
              onClick={() => handleTurn(i)}
              style={styles.square}
              sx={{color:cell === PlayerType.X ? playerColor.X : playerColor.O}}
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
