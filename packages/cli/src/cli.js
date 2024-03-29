#!/usr/bin/env node

import {program} from 'commander';
import init from './init.js';
import pkgJSON from './utils/pkg.js';
import update from './update.js';

const {name, version} = pkgJSON;

program
    .version(version)
    .description(`${name} cli`);


program
    .command('init')
    .description('init project')
    .action(async () => {
        await init();
    });

program
    .command('update')
    .description('update cli')
    .action(async () => {
        await update();
    });

program.parse(process.argv);