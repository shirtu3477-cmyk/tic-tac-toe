import React from "react";
import { ButtonBase, GridLegacy as Grid, Box, Button } from "@mui/material";
import type { PlayerType } from "../types";

interface IBoardProps {
  handleTurn: Function;
  reset: Function;
  board: (PlayerType | null)[];
}

const Board: React.FC<IBoardProps> = ({ handleTurn, reset, board }) => {
  return (
    <Box display={"flex"}>
      <Box mx={5}>
        <Button variant="contained" onClick={() => reset()}>
          reset
        </Button>
      </Box>
      <Grid
        container
        sx={{ width: 600, height: 600, border: "1px solid #68a1b8ff" }}
      >
        {board.map((cell, i) => (
          <Grid
            item
            xs={4}
            key={i}
            sx={{ width: 200, height: 200, border: "1px solid #68a1b8ff" }}
          >
            <ButtonBase
              onClick={() => handleTurn(i)}
              sx={{
                width: "100%",
                height: 200,
                fontSize: 80,
                userSelect: "none",
                color: cell === "X" ? "#d64584ff" : "#3c836eff",
              }}
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
