const { merge } = require('lodash');
const { TESTING_LIBRARY } = require('./constants');

const common = {
  devDependencies: {
    '@types/jest': '^25.2.1',
    'babel-jest': '^25.3.0',
    jest: '^25.3.0',
  },
  scripts: {
    test: 'jest .',
    'test:watch': 'jest --watch',
  },
};

module.exports = {
  [TESTING_LIBRARY]: merge(common, {
    devDependencies: {
      '@testing-library/react': '^10.0.2',
      '@babel/plugin-transform-runtime': '^7.9.0',
    },
  }),
};
