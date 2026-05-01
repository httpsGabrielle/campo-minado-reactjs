import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Stack,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import logo from "../assets/logo/logo.png";

import { Icon } from "@iconify/react";

export default function Header() {
  // Componente de botão com efeito de blur
  const BlurIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.6)", // transparência
    backdropFilter: "blur(10px)", // blur
    WebkitBackdropFilter: "blur(10px)", // Safari
    borderBottom: "1px solid rgba(255,255,255,0.2)",
  }));

  // Função para abrir o repositório no GitHub
  const handleGithub = () => {
    window.open(
      "https://github.com/httpsGabrielle/campo-minado-reactjs",
      "_blank",
    );
  };

  return (
    <AppBar color="transparent" component="nav" elevation={0}>
      <Toolbar>
        <Stack
          direction="row"
          spacing={1}
          sx={{ flexGrow: 1, alignItems: "end" }}
        >
          <Box component="img" src={logo} alt="Logo" sx={{ height: "28px" }} />
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <BlurIconButton>
            <Icon
              icon="mage:trophy-star-fill"
              width={24}
              height={24}
              color="#333"
            />
          </BlurIconButton>
          <BlurIconButton
            onClick={() => {
              handleGithub();
            }}
          >
            <Icon icon="mdi:github" width={24} height={24} color="#333" />
          </BlurIconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
