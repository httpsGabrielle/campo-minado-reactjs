import { Container, Stack } from "@mui/material";
import Board from "../components/Board";
import { useBoardStore } from "../store/useBoardStore";

export default function Home() {
  const startGame = useBoardStore((s) => s.startGame);

  return (
    <>
      <Stack sx={{ height: "100vh" }}>
        <Stack direction="row" justifyContent="end">
          <button onClick={startGame}>Start Game</button>
        </Stack>

        <Stack
          sx={{
            p: 5,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Board />
        </Stack>
      </Stack>
    </>
  );
}
