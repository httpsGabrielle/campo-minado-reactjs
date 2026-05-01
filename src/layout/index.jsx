import { Box, Container, CssBaseline, Stack, Toolbar } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router";
export default function Layout() {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <Header />

        <Stack
          component="main"
          flex={1}
          sx={{
            overflow: "auto",
            backgroundColor: "primary.lighter",
            height: "100vh",
            minHeight: "100%",
            flexGrow: 1,
          }}
        >
          <Toolbar />
          <Outlet />
        </Stack>
      </Stack>
    </>
  );
}
