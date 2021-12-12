const fs = require('fs');

const getInput = (path) => fs.readFileSync(path, { encoding: 'utf8' });

module.exports = { getInput };
