{
  "env": {
    "browser": true,
      "es2021": true,
        "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:prettier/recommended"
  ],
    "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
      "sourceType": "module"
  },
  "plugins": ["react", "prettier"],
    "rules": {
    "prettier/prettier": "error"
  }
}