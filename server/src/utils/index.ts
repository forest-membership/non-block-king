/**
 * 2차원 배열을 생성합니다.
 * @param width 너비
 * @param height 높이
 * @param initValue 초기값
 */
export const create2DArray = <T>(
  height: number,
  width: number,
  initValue: T
): T[][] => {
  return Array.from(Array(height), () => Array(width).fill(initValue));
};

/**
 * 배열에서 중복된 요소들을 제거합니다.
 * @param arr 검사할 배열
 */
export const removeDuplicateFromArray = <T>(arr: T[]): T[] => {
  return Array.from(new Set(arr));
};

/**
 * 0 ~ limit 사이의 난수를 생성합니다.
 * @param limit 경계값
 */
export const createRandomNumber = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};
