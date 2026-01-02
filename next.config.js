const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    // This won't fix @import url() but helps with SCSS imports
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    
    // Configure webpack to handle @import url() in SCSS
    // This allows CSS imports to pass through without being processed
    config.module.rules.forEach((rule) => {
      if (rule.test && rule.test.toString().includes('scss|sass')) {
        rule.oneOf?.forEach((oneOf) => {
          if (oneOf.use) {
            oneOf.use.forEach((use) => {
              // Configure sass-loader to handle url() imports
              if (use.loader && use.loader.includes('sass-loader')) {
                use.options = {
                  ...use.options,
                  sassOptions: {
                    ...use.options?.sassOptions,
                    outputStyle: 'expanded',
                  },
                  // Don't resolve @import url() - let them pass through
                  additionalData: '',
                };
              }
            });
          }
        });
      }
    });
    
    return config;
  },
}

module.exports = nextConfig

