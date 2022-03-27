function setUpPlayground(params: { rows: number, cols: number }) {
  const {rows, cols} = params;

  const playground = document.querySelector<HTMLElement>('.section-playground')!;
  playground.style.setProperty('--grid-rows', String(rows));
  playground.style.setProperty('--grid-cols', String(cols));

  for (let i = 0; i < (rows * cols); i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    playground.appendChild(gridItem);
  }
}

export { setUpPlayground };
