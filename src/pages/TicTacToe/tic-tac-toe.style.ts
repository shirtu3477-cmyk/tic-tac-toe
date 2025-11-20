import { createStyles } from "../../styles/create-styles";

export const useStyles = () =>
  createStyles({
    root: {
      height: "92.5vh",
      padding: "2rem",
      textAlign: "center",
      backgroundColor: "rgb(9, 9, 59)",
    },
    confetti: {
      width: 2000,
      height: 1000,
    },
    title: {
      color: "#68a1b8ff",
      mb: 4,
    },
    displayMessage: {
      color: "#8de3d2",
      mt: 4,
    },
    game: {
      display: "flex",
      justifyContent: "center",
    },
  });
