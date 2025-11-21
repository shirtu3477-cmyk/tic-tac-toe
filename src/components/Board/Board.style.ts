import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    box: {
      display: "flex",
    },
    resetBtn: {
      marginRight:10
    },
    grid: {
      width: 600,
      height: 600,
      border: "1px solid #68a1b8ff",
    },
    gridItem: { width: 200, height: 200, border: "1px solid #68a1b8ff" },
    square: {
      width: "100%",
      height: 200,
      fontSize: 80,
      userSelect: "none",
    },
  });
