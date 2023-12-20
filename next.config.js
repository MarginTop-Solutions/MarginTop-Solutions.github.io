module.exports = {
  // Other configurations...
  trailingSlash: true, // Optional, based on your preference
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other paths as needed
    };
  },
};
