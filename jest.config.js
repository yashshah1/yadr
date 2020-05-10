module.exports = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coverageDirectory: './coverage/',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
}