'use strict';
const assert = require('assert');
const getGlibcVersion = require('..');

describe('glibcVersion', function() {
  let expectedGlibcVersion;

  before(function() {
    this.timeout(30_000);
    expectedGlibcVersion = process.report.getReport().header.glibcVersionRuntime;
  })

  it('returns the glibc version', function() {
    assert.strictEqual(getGlibcVersion(), expectedGlibcVersion);
  });
});
