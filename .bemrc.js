module.exports = {
  root: true,
  modules: {
    "bem-tools": {
      plugins: {
        create: {
          techs: ["pug", "sass"],
          levels: {
            "src/components/": {
              default: true
            }
          }
        }
      }
    }
  }
};
