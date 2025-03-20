export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  extensionsToTreatAsEsm: [".jsx"],
  globals: {
    "import.meta": {
      env: {
        VITE_API_KEY: "78684310-850d-427a-8432-4a6487f6dbc4",
      },
    },
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
