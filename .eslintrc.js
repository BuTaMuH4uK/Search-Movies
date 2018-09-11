module.exports = {
    "extends": "airbnb",
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
        "linebreak-style": 0,
        "no-console": "off",
        "react/prop-types": 0
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "15.6.1"
        }
    },
};