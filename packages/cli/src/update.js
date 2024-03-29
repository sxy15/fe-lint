import {execSync} from 'child_process';
import {compare} from 'compare-versions';
import ora from 'ora';
import pkgJSON from './utils/pkg.js';

const {name, version} = pkgJSON;

const checkVersion = async () => {
    let latestVersion = execSync(`pnpm show ${name} version`).toString().trim();

    return compare(version, latestVersion, '<') ? latestVersion : '';
};

const update = async () => {
    const checking = ora(`${name} checking version`);
    checking.start();

    const latestVersion = await checkVersion();

    if (latestVersion) {
        const update = ora(`${name} updating to ${latestVersion}`);
        update.start();

        execSync(`pnpm i ${name}@latest -g`);

        update.stop();
    }

    checking.stop();
};

export default update;