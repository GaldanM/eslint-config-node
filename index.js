module.exports = {
  plugins: ["eslint-plugin-node"],
  extends: ["@galdanm/eslint-config-base", "plugin:node/recommended"],
  env: {
    node: true,
    es6: true,
  },
};
