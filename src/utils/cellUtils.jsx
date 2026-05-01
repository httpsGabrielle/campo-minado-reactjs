// Função para abrir uma célula no tabuleiro
function openCell(board, row, col) {
  const newBoard = structuredClone(board);
  const cell = newBoard[row][col];

  if (cell.isOpen) return newBoard;

  cell.isOpen = true;

  // Se tiver flag, remove a flag ao abrir a célula
  if (cell.isFlagged) {
    cell.isFlagged = false;
  }

  // Se a célula for uma mina, o jogo termina
  if (cell.isMine) {
    alert("Game Over 💥");
    return newBoard;
  }

  // Se a célula não tiver minas vizinhas, abre as células vizinhas em cascata
  if (cell.neighborMines === 0) {
    floodFill(newBoard, row, col);
  }

  return newBoard;
}

// Função para abrir células vizinhas em cascata quando a célula atual não tem minas próximas
function floodFill(board, row, col) {
  const dirs = [-1, 0, 1];

  dirs.forEach((dx) => {
    dirs.forEach((dy) => {
      const nr = row + dx;
      const nc = col + dy;

      if (nr >= 0 && nr < board.length && nc >= 0 && nc < board[0].length) {
        const cell = board[nr][nc];

        if (!cell.isOpen && !cell.isMine) {
          cell.isOpen = true;

          if (cell.neighborMines === 0) {
            floodFill(board, nr, nc);
          }
        }
      }
    });
  });
}

// Função para colocar flag em uma célula
function toggleFlag(board, row, col) {
  const newBoard = structuredClone(board);
  const cell = newBoard[row][col];

  if (!cell.isOpen) {
    cell.isFlagged = !cell.isFlagged;
  }

  return newBoard;
}

export { openCell, toggleFlag };
