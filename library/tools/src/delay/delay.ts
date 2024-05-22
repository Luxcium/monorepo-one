// delay.ts

import type { DelayValue } from './types/DelayValue';
import { calculateRandomNumber, measurePerformance } from './utils';

/**
 * Function to simulate a delay and measure its performance
 * @param lowerBound - Lower limit for the delay
 * @param upperBound - Upper limit for the delay
 * @returns PerformanceResult containing the chosen delay and execution time
 */
export async function delay(
  lowerBound = 500,
  upperBound: number = lowerBound
): Promise<DelayValue> {
  return measurePerformance(async (): Promise<number> => {
    if (0 === lowerBound && 0 === upperBound) {
      return Promise.resolve(Number.NaN);
    }
    const chosenDelay = calculateRandomNumber(lowerBound, upperBound);
    return new Promise(resolve => setTimeout(resolve, chosenDelay));
  });
}
