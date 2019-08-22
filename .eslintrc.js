module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react'],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0,
        'react/jsx-key': 1,
        'no-unused-vars': 'warn',
        'no-console': 0,
        'no-case-declarations': 0,
        'no-extra-boolean-cast': 0,
    },
    globals: {
        overwolf: true,
    },
    settings: {
        react: {
            version: 'detect',
            pragma: 'React',
            createClass: 'createReactClass',
            flowVersion: 'detect',
        },
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    },
};
