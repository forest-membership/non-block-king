export function create2DArray<T>(
  rows: number,
  cols: number,
  initValue: T
): T[][] {
  return Array.from(Array(rows), () => Array(cols).fill(initValue));
}
