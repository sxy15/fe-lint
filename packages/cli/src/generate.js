import path from 'path';
import fs from 'fs-extra';
import {configFileName} from './utils/choices.js';
import {src} from './utils/pkg.js';

const generateTemplate = async (cwd, types) => {
    const config = types.map(key => configFileName[key]);
    const templatePath = path.resolve(src, './_config');

    for (const filename of config) {
        const filepath = path.resolve(templatePath, filename);

        const content = await fs.readFileSync(filepath, 'utf-8');

        const dest = path.resolve(cwd, filename);

        await fs.outputFileSync(dest, content, 'utf-8');
    }

};

export default generateTemplate;