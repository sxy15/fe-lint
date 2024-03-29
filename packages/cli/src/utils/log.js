import chalk from 'chalk';

const {green, blue, yellow, red} = chalk;

export default {
    success(text) {
        console.info(green(text));
    },
    info(text) {
        console.info(blue(text));
    },
    warn(text) {
        console.info(yellow(text));
    },
    error(text) {
        console.error(red(text));
    },

};
