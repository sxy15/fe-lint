import path from 'path';
import fs from 'fs-extra';
import {fileURLToPath} from 'url';

const pkgPath = fileURLToPath(new URL('.', import.meta.url));

const pkg = fs.readFileSync(path.join(pkgPath, '../../package.json'), 'utf-8');

const pkgJSON = JSON.parse(pkg);

export default pkgJSON;