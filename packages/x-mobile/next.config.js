//@ts-check

const { composePlugins, withNx } = require('@nx/next');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

// Apply plugins first
const configWithPlugins = composePlugins(...plugins)(nextConfig);

// Apply PWA and ensure SVG webpack config is preserved
const pwaConfig = withPWA(configWithPlugins);

// Ensure SVG webpack config is applied after PWA modifies the config
module.exports = {
  ...pwaConfig,
  webpack: (config, options) => {
    // Apply PWA's webpack config first
    if (pwaConfig.webpack) {
      config = pwaConfig.webpack(config, options);
    }

    // Then apply SVG configuration
    const fileLoaderRule = config.module.rules.find(
      (/** @type {{ test: { test: (arg0: string) => any; }; }} */ rule) =>
        rule.test?.test?.('.svg')
    );

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;

      config.module.rules.push(
        {
          ...fileLoaderRule,
          test: /\.svg$/i,
          resourceQuery: /url/,
        },
        {
          test: /\.svg$/i,
          issuer: fileLoaderRule.issuer,
          resourceQuery: {
            not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
          },
          use: ['@svgr/webpack'],
        }
      );
    }

    // Ensure aliases are preserved
    config.resolve.alias = {
      ...config.resolve.alias,
      '~/public': path.resolve(__dirname, './public'),
      '~': path.resolve(__dirname, '../ui/src'),
    };

    return config;
  },
};
