module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "always",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/prop-types": "off",
    "import/no-cycle": "off",
    "no-console": "off",
    "no-unused-vars": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "no-alert": "off",
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
