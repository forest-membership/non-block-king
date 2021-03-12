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
 * 1차원 배열을 생성합니다.
 * @param length 배열의 길이
 * @param initValue 초기값
 */
export const create1DArray = <T>(length: number, initValue: T): T[] => {
  return Array(length).fill(initValue);
};

/**
 * 2차원 배열을 복사한 새로운 배열을 반환합니다.
 * @param original 원본 2차원 배열
 */
export const copy2DArray = <T>(original: T[][]): T[][] => {
  const width = original[0].length;
  const height = original.length;
  const copied = create2DArray<T | undefined>(height, width, undefined);

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      copied[h][w] = original[h][w];
    }
  }

  return copied as T[][];
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

/**
 * 랜덤 문자열을 생성합니다.
 * @param length 랜덤 문자열 길이
 */
export const generateRandomString = (length: number, str: string): string => {
  str += Math.random().toString(36).substr(2, length);
  if (str.length > length) {
    return str.slice(0, length);
  }

  return generateRandomString(length, str);
};
