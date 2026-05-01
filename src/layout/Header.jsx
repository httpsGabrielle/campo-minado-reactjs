import { useBoardStore } from "../store/useBoardStore";

import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import logo from "../assets/logo/logo.png";

export default function Header() {
  const startGame = useBoardStore((s) => s.startGame);
  const level = useBoardStore((s) => s.level);
  const setLevel = useBoardStore((s) => s.setLevel);

  return (
    <AppBar color="inherit" component="nav" position="fixed" elevation={1}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          sx={{ flexGrow: 1, alignItems: "end" }}
        >
          <Box component="img" src={logo} alt="Logo" sx={{ height: 32 }} />
          <Typography variant="h6">Campo Minado</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <Select
            value={level}
            onChange={(event) => setLevel(event.target.value)}
            size="small"
          >
            <MenuItem value="easy">Fácil</MenuItem>
            <MenuItem value="medium">Médio</MenuItem>
            <MenuItem value="hard">Difícil</MenuItem>
          </Select>
          <Button color="primary" variant="contained" onClick={startGame}>
            Start
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
