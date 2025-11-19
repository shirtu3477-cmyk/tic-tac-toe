import type { PlayerType } from "../../types";

export interface HistoryTurn {
  id: number;
  x: number;
  y: number;
  player: PlayerType;
}
