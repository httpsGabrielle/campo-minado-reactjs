export function createBoard(rows, cols, mines, safeCell = null) {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({
      isMine: false,
      isOpen: false,
      neighborMines: 0,
    })),
  );

  let placed = 0;

  while (placed < mines) {
    const r = Math.floor(Math.random() * rows);
    const c = Math.floor(Math.random() * cols);

    // Evita colocar mina na célula protegida (usada no primeiro clique).
    const isSafeCell = safeCell && safeCell.row === r && safeCell.col === c;

    if (isSafeCell) continue;

    if (!board[r][c].isMine) {
      board[r][c].isMine = true;
      placed++;
    }
  }

  const dirs = [-1, 0, 1];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c].isMine) continue;

      let count = 0;

      dirs.forEach((dx) => {
        dirs.forEach((dy) => {
          const nr = r + dx;
          const nc = c + dy;

          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            board[nr][nc].isMine
          )
            count++;
        });
      });

      board[r][c].neighborMines = count;
    }
  }

  return board;
}
