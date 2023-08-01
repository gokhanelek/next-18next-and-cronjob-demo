const { register } = require('ts-node');

const { compilerOptions } = require('./tsconfig-register.json');

function runTS(filePath) {
  register({ compilerOptions });
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const result = require(filePath);
  return result.default || result;
}

module.exports = runTS;
