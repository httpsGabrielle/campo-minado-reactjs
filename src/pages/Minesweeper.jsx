import { Stack } from "@mui/material";
import Board from "../components/Board";
import { useBoardStore } from "../store/useBoardStore";

export default function Home() {
  const startGame = useBoardStore((s) => s.startGame);

  return (
    <Stack sx={{ alignItems: "center" }}>
      <Board />
    </Stack>
  );
}
