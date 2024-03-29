export default {
    'extends': ['stylelint-config-standard-scss'],
    'rules': {
        'declaration-property-unit-allowed-list': {
            '/^border/': ['px'],
        },
        'color-named': 'never',
        'function-disallowed-list': ['rgb', 'hwb', 'lch'],
    },
};