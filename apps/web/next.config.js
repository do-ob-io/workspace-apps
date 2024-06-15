import webpack from 'webpack';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';

/**
 * Create aliases for all packages that have a `src` folder.
 */
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packagesPath = join(__dirname, '../../packages');
const packages = fs.readdirSync(packagesPath)
  .filter((file) => fs.statSync(join(packagesPath, file)).isDirectory());

const aliases = packages.reduce((acc, pack) => {
  const srcFolder = join(packagesPath, pack, 'src');
  const hasSrc = fs.existsSync(srcFolder);
  if (!hasSrc) {
    return acc;
  }

  acc[`@-/${pack}$`] = packagesPath + '/' + pack + '/src';

  return acc;
}, {});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  webpack: (config ) => {
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^node:stream$|^pg-native$|^cloudflare:sockets$/,
      }),
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };
    
    return config;
  }
};

export default nextConfig;
