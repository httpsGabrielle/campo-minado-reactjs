import { Box, Grid } from "@mui/material";
import { useBoardStore } from "../store/useBoardStore";
import { Icon } from "@iconify/react";

export default function Cell({ row, col, cell }) {
  const openCell = useBoardStore((s) => s.openCell);
  const toggleFlag = useBoardStore((s) => s.toggleFlag);

  // Função para lidar com o clique com o botão direito (colocar ou remover flag)
  const handleRightClick = (e) => {
    e.preventDefault();
    toggleFlag(row, col);
  };

  return (
    <Grid
      item
      onClick={() => openCell(row, col)}
      onContextMenu={handleRightClick}
    >
      <Box
        sx={{
          minWidth: { xs: 32, sm: 40 },
          height: { xs: 32, sm: 40 },
          border: 1,
          borderColor: "white",
          backgroundColor: cell.isOpen ? "primary.lighter" : "primary.light",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cell.isOpen ? (
          cell.isMine ? (
            <Icon icon="mingcute:bomb-fill" width={24} />
          ) : (
            cell.neighborMines || ""
          )
        ) : cell.isFlagged ? (
          "🚩"
        ) : (
          ""
        )}
      </Box>
    </Grid>
  );
}
