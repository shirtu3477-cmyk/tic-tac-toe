import type { PlayerType } from "../../consts/playertype";

export interface HistoryTurn {
  id: number;
  x: number;
  y: number;
  player: PlayerType;
}
