import {
  areEqualBounds,
  calculateRandomNumber,
  effectiveLowerBound,
  effectiveUpperBound,
  measurePerformance,
  swap,
  timeStamp,
} from './utils';
export type {
  DelayValue,
  PerformanceResult,
  PerformanceResultTupple,
  TaskStepsResult,
  TaskValue,
} from './types';

export { delay } from './delay';
export { heavyTask } from './heavyTask';
export { heavyTaskSpecial } from './heavyTaskSpecial';
export { calculateRandomNumber, measurePerformance, timeStamp };
export const utils = {
  areEqualBounds,
  calculateRandomNumber,
  effectiveLowerBound,
  effectiveUpperBound,
  measurePerformance,
  swap,
  timeStamp,
};
