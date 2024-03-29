const {overrides: [defaults]} = require('./index');

module.exports = {
    overrides: [
        {
            ...defaults,
            rules: {
                ...defaults.rules,
                '@typescript-eslint/ban-ts-comment': [
                    'warn',
                    {
                        'ts-expect-error': 'allow-with-description',
                        'ts-ignore': 'allow-with-description',
                        'ts-nocheck': 'allow-with-description',
                        'ts-check': 'allow-with-description',
                    },
                ],
                '@typescript-eslint/no-floating-promises': ['error', {ignoreVoid: true}],
                'no-void': ['error', {'allowAsStatement': true}],
                '@typescript-eslint/quotes': ['error', 'single'],
            },
        },
    ],
};