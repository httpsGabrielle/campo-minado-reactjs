import { create } from "zustand";
import { createBoard } from "../utils/boardUtils";
import { openCell, toggleFlag } from "../utils/cellUtils";

export const useBoardStore = create((set) => ({
  board: [],
  rows: 9,
  cols: 9,
  mines: 10,
  flags: 0,
  status: "idle",

  startGame: () =>
    set((state) => ({
      board: createBoard(state.rows, state.cols, state.mines),
      status: "playing",
    })),

  openCell: (row, col) =>
    set((state) => ({
      board: openCell(state.board, row, col),
    })),

  toggleFlag: (row, col) =>
    set((state) => ({
      board: toggleFlag(state.board, row, col),
      flags: state.flags + (state.board[row][col].isFlagged ? -1 : 1),
    })),
}));
