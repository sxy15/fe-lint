import path from 'path';
import fs from 'fs-extra';
import {fileURLToPath} from 'url';

const src = fileURLToPath(new URL('..', import.meta.url));

const pkg = fs.readFileSync(path.join(src, '../package.json'), 'utf-8');

const pkgJSON = JSON.parse(pkg);

export {src};

export default pkgJSON;