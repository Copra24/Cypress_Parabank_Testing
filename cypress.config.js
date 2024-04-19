const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      // {
      //   "include"; ["node_modules/cypress", "./cypress/**/*.js"]
      // }
    },
  },

  
});
