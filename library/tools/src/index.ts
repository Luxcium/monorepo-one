import * as ScanDirs from './scan-dirs';
import type { Mapper } from './types/scan-dir';

export * as assertionTools from './assertion-tools';
export { UniqueBrowser } from './browser';
export {
  calculateRandomNumber,
  delay,
  heavyTask,
  heavyTaskSpecial,
  measurePerformance,
  timeStamp,
} from './delay';
export * as dummyExampleStructure_001 from './dummy-example-structure-001';
export * as dummyExampleStructure_002 from './dummy-example-structure-002';
export * as utils from './helpers';
export {
  createCustomPlaceholder,
  createDefaultPlaceholder,
  createMessagePlaceholder,
  createPassThroughLoggerPlaceholder,
  createPassThroughPlaceholder,
  createValueLoggerPlaceholder,
} from './placeholders';
export { range } from './range';
export type { Mapper } from './types/scan-dir';
type Mapper_ = Mapper;
export namespace types {
  export type Mapper = Mapper_;
}

export const tools = {
  ScanDirs,
};

export default tools;

export type {
  DelayValue,
  PerformanceResult,
  PerformanceResultTupple,
  TaskStepsResult,
  TaskValue,
} from './delay';
