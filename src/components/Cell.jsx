import { Box, Grid } from "@mui/material";
import { useBoardStore } from "../store/useBoardStore";

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
          minWidth: 40,
          height: 40,
          border: "1px solid #ccc",
          backgroundColor: cell.isOpen ? "#ddd" : "#aaa",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cell.isOpen && (cell.isMine ? "💣" : cell.neighborMines || "")}
        {cell.isFlagged && "🚩"}
      </Box>
    </Grid>
  );
}
