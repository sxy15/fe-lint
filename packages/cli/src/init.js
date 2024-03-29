import path from 'path';
import fs from 'fs-extra';
import update from './update.js';
import choices from './utils/choices.js';
import {checkbox} from '@inquirer/prompts';
import generateTemplate from './generate.js';
import log from './utils/log.js';

const init = async () => {
    const cwd = process.cwd();
    // const pkgPath = path.resolve(cwd, 'package.json');

    // let pkg = fs.readJSONSync(pkgPath);

    await update();

    const types = await checkbox({
        message: 'What do you want to init?',
        choices,
        required: true,
    });

    // script
    // husky

    await generateTemplate(cwd, types);

    log.success('Init success!');
};

init();

export default init;