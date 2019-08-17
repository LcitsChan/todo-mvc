module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
  ],
  "plugins": ["@typescript-eslint", "prettier"], 
  "rules": {
    "prettier/prettier": "error"
  }
};