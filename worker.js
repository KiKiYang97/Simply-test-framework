const fs = require('fs');

exports.runTest = async (testFile) => {
    const code = await fs.promises.readFile(testFile, 'utf-8');
    return `worker id: ${process.env.JEST_WORKER_ID}\\n file: ${testFile}:\\n ${code}`;
}
