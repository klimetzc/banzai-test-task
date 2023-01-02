export const getRandInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function* getRandomElements<T>(arr: T[], quantity: number) {
  while (quantity > 0) {
    yield arr[Math.floor(Math.random() * arr.length)];
    quantity--;
  }
}

export const getRandomElement = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];
