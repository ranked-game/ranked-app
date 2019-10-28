module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true,
            experimentalObjectRestSpread: true,
            experimentalDecorators: true,
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
        'no-unused-vars': 1,
        'no-console': 0,
        'no-case-declarations': 0,
        'no-extra-boolean-cast': 0,
        'getter-return': 2,
        'space-before-blocks': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 1,
        'no-extra-boolean-cast': 0,
        'no-extra-parens': 0,
        'no-extra-semi': 1,
        'no-func-assign': 2,
        'no-misleading-character-class': 2,
        'no-obj-calls': 2,
        'no-regex-spaces': 1,
        'no-sparse-arrays': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 1,
        'use-isnan': 1,
        'valid-typeof': 1,
        'accessor-pairs': 2,
        'array-callback-return': 2,
        'consistent-return': 1,
        'default-case': 1,
        eqeqeq: 2,
        'no-else-return': 1,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eval': 2,
        'no-implied-eval': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-floating-decimal': 1,
        'no-labels': 1,
        'no-lone-blocks': 1,
        'no-loop-func': 2,
        'no-multi-spaces': 1,
        'no-multi-str': 2,
        'no-octal': 2,
        'no-redeclare': 1,
        'no-return-assign': 2,
        'no-self-assign': 2,
        'no-self-compare': 2,
        'no-useless-call': 1,
        'no-useless-concat': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'require-await': 2,
        yoda: 1,
        'no-label-var': 2,
        'no-shadow-restricted-names': 2,
        'no-undef-init': 2,
        'no-use-before-define': 2,

        /* stylistic */
        'block-spacing': 1,
        'comma-dangle': ['warn', 'always-multiline'],
        'func-call-spacing': ['error', 'never'],
        'id-length': [
            'error',
            { min: 3, exceptions: ['e', '_', 'db', 'id', 'ui', 'x', 'y', 'i', 'me'] },
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true, mode: 'strict' }],
        'keyword-spacing': ['warn', { before: true, after: true }],
        'lines-between-class-members': ['error', 'always'],
        'new-parens': 2,
        'space-before-blocks': 2,
        'space-infix-ops': 2,
        'space-unary-ops': 2,
        'spaced-comment': [
            'warn',
            'always',
            {
                markers: ['*', '?', '!', 'TODO:'],
            },
        ],
        'arrow-parens': ['error', 'always'],
        'arrow-spacing': 2,
        'no-const-assign': 2,
        'no-duplicate-imports': 2,
        'rest-spread-spacing': ['error', 'never'],
    },
    globals: {
        overwolf: true,
        tracker: true,
        app: true,
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
