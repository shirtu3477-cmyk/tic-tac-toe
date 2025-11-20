import { PlayerType } from "../../consts/playertype";

export const isGameEnded = (
  updatedBoard: (PlayerType | null)[]
): PlayerType | boolean => {
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

  return isBoardFull ? true : false;
};
