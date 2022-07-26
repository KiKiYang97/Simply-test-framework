import JestHasteMap from 'jest-haste-map';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const root = dirname(fileURLToPath(import.meta.url));
const hasteMapOptions = {
    extensions: ['js'],
    maxWorkers: cpus().length,
    name: 'simply-test-framework',
    platforms: [],
    rootDir: root,
    roots: [root]
};
const hasteMap = new JestHasteMap.default(hasteMapOptions);
await hasteMap.setupCachePath(hasteMapOptions);
const  { hasteFS } = await hasteMap.build();
const testFiles = hasteFS.getAllFiles();
console.log(testFiles);