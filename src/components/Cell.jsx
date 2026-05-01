import { Grid } from "@mui/material";
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
      size={{ xs: 1 }}
      onClick={() => openCell(row, col)}
      onContextMenu={handleRightClick}
      sx={{
        border: "1px solid black",
        aspectRatio: "1/1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: cell.isOpen ? "#ddd" : "#aaa",
        cursor: "pointer",
      }}
    >
      {cell.isOpen && (cell.isMine ? "💣" : cell.neighborMines || "")}
      {cell.isFlagged && "🚩"}
    </Grid>
  );
}
