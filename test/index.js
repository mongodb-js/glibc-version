'use strict';
const assert = require('assert');
const getGlibcVersion = require('..');

describe('glibcVersion', function() {
  it('returns the glibc version', function() {
    assert.strictEqual(getGlibcVersion(), process.report.getReport().header.glibcVersionRuntime);
  });
});
