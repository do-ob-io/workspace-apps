/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('node:path');

// Find the project and workspace directories
const projectRoot = __dirname;
// This can be replaced with `find-yarn-workspace-root`
const monorepoRoot = path.resolve(projectRoot, '../..');
const packagesRoot = path.resolve(monorepoRoot, 'packages');
const nodeModulesRoot = path.resolve(monorepoRoot, 'node_modules');

/**
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(projectRoot);

// 1. Watch all files within the monorepo
defaultConfig.watchFolders = [
  projectRoot,
  packagesRoot,
  nodeModulesRoot,
];

// 2. Let Metro know where to resolve packages and in what order
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// 3. Enable unstable resolvers for monorepos
defaultConfig.resolver.unstable_enableSymlinks = true;
defaultConfig.resolver.unstable_enablePackageExports = true;

// 4. Set transform options
defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});

module.exports = withNativeWind(defaultConfig, {
  input: './app/global.css',
});
