import { Container, Grid, Stack } from "@mui/material";
import { useBoardStore } from "../store/useBoardStore";
import Cell from "./Cell";

export default function Board() {
  const board = useBoardStore((s) => s.board);
  const rows = useBoardStore((s) => s.rows);
  const cols = useBoardStore((s) => s.cols);

  return (
    <>
      <Stack
        spacing={0}
        sx={{
          width: "fit-content",
        }}
      >
        {board.map((row, r) => (
          <Grid container item key={r} spacing={0}>
            {row.map((cell, c) => (
              <Cell key={c} row={r} col={c} cell={cell} />
            ))}
          </Grid>
        ))}
      </Stack>
    </>
  );
}
