const { getGlibcVersion } = require('bindings')('glibc_version');

module.exports = getGlibcVersion;
