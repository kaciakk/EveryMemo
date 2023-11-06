// next.config.js

module.exports = {
    // Inne konfiguracje...
    webpack: (config, { isServer }) => {
      // Dodaj folder components do konfiguracji Next.js
      config.resolve.modules.push(__dirname);
      return config;
    },
  };
  