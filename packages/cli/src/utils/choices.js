const choices = [
    {
        name: 'stylelint',
        value: 'stylelint',
    },
    {
        name: 'markdownlint',
        value: 'markdownlint',
    },
    {
        name: 'commitlint',
        value: 'commitlint',
    },
    {
        name: 'eslint',
        value: 'eslint',
    },
];

export const configFileName = {
    stylelint: 'stylelint.config.js',
    markdownlint: '.markdownlint.json',
    commitlint: 'commitlint.config.js',
    eslint: '.eslintrc.js',
};

export default choices;