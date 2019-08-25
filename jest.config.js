module.exports = {
  roots: ['<rootDir>/src'],
  transformIgnorePatterns: ['<rootDir>/node_modules'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.(css|jpg|png)$': '<rootDir>/src/smoke/empty-module.js',
  },
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx'],
};

// const { defaults } = require('jest-config');
// module.exports = {
//   transform: {
//     '^.+\\.tsx?$': 'ts-test',
//   },
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
// };
