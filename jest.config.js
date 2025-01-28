export default {
  collectCoverage: true,
  collectCoverageFrom: [
    "**/src/**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!src/**/components/**/index.{js, jsx, ts, tsx}",
    "!src/**/components/**/styles.{js, ts}",
    "!src/**/components/**/__tests__/**/*.{js, jsx, ts, tsx}",
    "!**/index.{js, ts}",
    "!**/coverage**",
    "!**/src/**/types/**",
    "!**/src/**/styles/**",
    "!**/src/**/constrants/**",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["json-summary", "text", "html", "lcov"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx&$": "ts-jest",
  },
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/&(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  preset: "ts-jest",
  transformIgnorePatterns: [
    '!node_modules/(?!"src/*.)',
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
};
