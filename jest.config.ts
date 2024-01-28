module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    globals: {
    },
    transform: {
    '^.+\\.{ts|tsx}?$': ['ts-jest', {
      tsconfig: 'tsconfig.json',
    }],

  },
}
