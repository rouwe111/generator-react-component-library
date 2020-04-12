module.exports = {
  scripts: {
    storybook: 'start-storybook -p 6006',
    'build:storybook': 'build-storybook -o public/',
  },
  devDependencies: {
    '@storybook/addon-a11y': '^5.3.18',
    '@storybook/addon-actions': '^5.3.18',
    '@storybook/addon-links': '^5.3.18',
    '@storybook/addon-storysource': '^5.3.18',
    '@storybook/addon-viewport': '^5.3.18',
    '@storybook/addons': '^5.3.18',
    '@storybook/react': '^5.3.18',
    'require-context.macro': '^1.2.2',
    'storybook-readme': '^5.0.8',
    'babel-loader': '^8.1.0',
  },
};
