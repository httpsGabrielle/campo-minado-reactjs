import { Stack } from "@mui/material";
import Board from "../components/Board";
import GameStats from "../components/GameStats";
import { useBoardStore } from "../store/useBoardStore";
import { useEffect } from "react";

export default function Home() {
  const startGame = useBoardStore((s) => s.startGame);

  // Inicia o jogo ao montar o componente.
  useEffect(() => {
    startGame();
  }, [startGame]);

  return (
    <Stack
      sx={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Stack
        spacing={1}
        sx={{
          p: 3,
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <GameStats />
        <Board />
      </Stack>
    </Stack>
  );
}
