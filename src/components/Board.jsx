import { Container, Grid, Stack } from "@mui/material";
import { useBoardStore } from "../store/useBoardStore";
import Cell from "./Cell";

export default function Board() {
  const board = useBoardStore((s) => s.board);
  const rows = useBoardStore((s) => s.rows);
  const cols = useBoardStore((s) => s.cols);

  return (
    <>
      <Grid
        container
        spacing={1}
        columns={{ xs: cols }}
        sx={{ width: "300px" }}
      >
        {board.map((row, r) =>
          row.map((cell, c) => (
            <Cell key={`${r}-${c}`} row={r} col={c} cell={cell} />
          )),
        )}
      </Grid>
    </>
  );
}
