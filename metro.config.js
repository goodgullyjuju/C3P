// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add the following line to your existing config 
if (
    config.resolver &&
    config.resolver.sourceExts &&
    Array.isArray(config.resolver.sourceExts)
  ) {
    config.resolver.sourceExts.push('cjs');
  }

// Add this configuration to resolve your font assets
config.resolver.assetExts = process.env.NODE_ENV === "production"
  ? ["ttf", "otf", "woff", "woff2"]
  : config.resolver.assetExts.filter(ext => ext !== "svg");

module.exports = config;
