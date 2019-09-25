module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react",
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "rules": {
    "prettier/prettier": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": "error",
    "arrow-body-style": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error"
  }
};
