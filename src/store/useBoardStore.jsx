import { create } from "zustand";
import { createBoard } from "../utils/boardUtils";
import { openCell, toggleFlag } from "../utils/cellUtils";

const LEVEL_CONFIG = {
  easy: { rows: 9, cols: 9, mines: 10 },
  medium: { rows: 16, cols: 16, mines: 40 },
  hard: { rows: 16, cols: 30, mines: 99 },
};

export const useBoardStore = create((set) => ({
  board: [],
  rows: 9,
  cols: 9,
  mines: 10,
  flags: 0,
  status: "idle",
  level: "easy",

  setLevel: (level) =>
    set(() => ({
      level,
    })),

  startGame: () =>
    set((state) => {
      const config = LEVEL_CONFIG[state.level] ?? LEVEL_CONFIG.easy;

      return {
        board: createBoard(config.rows, config.cols, config.mines),
        rows: config.rows,
        cols: config.cols,
        mines: config.mines,
        status: "playing",
        flags: 0,
        level: state.level,
      };
    }),

  openCell: (row, col) =>
    set((state) => {
      // Se nenhuma célula está aberta ainda, este é o primeiro movimento.
      const isFirstMove = !state.board.some((line) =>
        line.some((cell) => cell.isOpen),
      );

      let board = state.board;

      // Se o primeiro clique caiu numa mina, recria o tabuleiro
      // garantindo que a posição clicada seja segura.
      if (isFirstMove && board[row][col].isMine) {
        board = createBoard(state.rows, state.cols, state.mines, { row, col });
      }

      return {
        board: openCell(board, row, col),
      };
    }),

  toggleFlag: (row, col) =>
    set((state) => ({
      board: toggleFlag(state.board, row, col),
      flags: state.flags + (state.board[row][col].isFlagged ? -1 : 1),
    })),
}));
