import {
  Stack,
  Typography,
  Select,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import { useBoardStore } from "../store/useBoardStore";
import { Icon } from "@iconify/react";

export default function GameStats() {
  const mines = useBoardStore((s) => s.mines);
  const flag = useBoardStore((s) => s.flags);
  const level = useBoardStore((s) => s.level);
  const setLevel = useBoardStore((s) => s.setLevel);
  const startGame = useBoardStore((s) => s.startGame);

  return (
    <>
      <Stack direction="row">
        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: "center", justifyContent: "center", flexGrow: 1 }}
        >
          <Icon icon="icon-park-solid:flag" color="red" />
          <Typography variant="h6">{flag}</Typography>
          <Typography variant="h6">/</Typography>
          <Typography variant="h6">{mines}</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Select
            value={level}
            onChange={(event) => {
              setLevel(event.target.value);
              startGame();
            }}
            size="small"
          >
            <MenuItem value="easy">Fácil</MenuItem>
            <MenuItem value="medium">Médio</MenuItem>
            <MenuItem value="hard">Difícil</MenuItem>
          </Select>
          <IconButton color="primary" variant="contained" onClick={startGame}>
            <Icon icon="codicon:debug-restart" />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
}
