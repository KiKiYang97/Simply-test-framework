const fs = require('fs');

exports.runTest = async (testFile) => {
    const code = await fs.promises.readFile(testFile, 'utf-8');
    const testResult = {
        success: false,
        errorMessage: null
    }
    try {
        const expect = (received) => ({
           toBe: (expected) => {
               if (received !== expected) {
                   throw new Error(`Expected ${expected} but received ${received}`)
               }
               return true;
           },
           toBeGreaterThan: (expected) => {
               if (expected <= received) {
                   throw new Error(`Expected ${expected} to be greater than ${received}`)
               }
               return true;
           },
            toContain: (expected) => {
               if (!received.includes(expected)) {
                   throw new Error(`Expected ${expected} contains in ${received}`)
               }
               return true;
            },
            stringContaining: (expected) => {
                if (!received.includes(expected)) {
                    throw new Error(`Expected ${expected} stringContaining in ${received}`)
                }
                return true;
            }
        });
        eval(code);
        testResult.success = true;
    } catch (e) {
        testResult.errorMessage = e.message
    }
    return testResult;
}
