import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: '.',
  testMatch: ['<rootDir>/**/*.test.ts(x)?'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
};

export default config;
