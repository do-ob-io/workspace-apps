/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..');
const packagesRoot = path.resolve(monorepoRoot, 'packages');

const defaultConfig = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
defaultConfig.watchFolders = [
  projectRoot,
  packagesRoot,
];

// 2. Let Metro know where to resolve packages and in what order
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

module.exports = defaultConfig
