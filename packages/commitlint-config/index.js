export default { 
  extends: ['@commitlint/config-conventional'],
  rules: {
    "body-max-length": [2, "always", 20],
  }
};
