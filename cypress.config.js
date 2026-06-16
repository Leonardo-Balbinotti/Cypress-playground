const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    viewportWidth: 1280,  // Adiciona a largura padrão
    viewportHeight: 720, // Adiciona a altura padrão
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
