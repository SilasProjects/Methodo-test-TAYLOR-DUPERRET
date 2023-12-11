import type { Config } from "jest";

const config: Config = {
  rootDir : "tests",
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};

export default config;
