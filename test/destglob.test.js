import path from 'path';
import {expect} from 'chai';
import destglob from '../src/destglob';

describe('Testing destglob', function() {

  const cwd = process.cwd();

  function title (glob) {
    function func(glb) {
      return `'${glb}'`;
    }

    if (Array.isArray(glob)) {
      return '[' + glob.map(func).join(', ') + ']';
    }

    return func(glob);
  }

  [
    {
      glob: 'index.js',
      result: ['build/index.js']
    },
    {
      glob: 'src/index.js',
      result: ['build/src/index.js']
    },
    {
      glob: 'src/*.js',
      result: ['build/src/*.js']
    },
    {
      glob: ['src/*.js'],
      result: ['build/src/*.js']
    },
    {
      glob: 'src/**/*.js',
      result: ['build/src/**/*.js']
    },
    {
      glob: ['src/*.js', 'test/**/*.js'],
      result: ['build/src/*.js', 'build/test/**/*.js']
    },
    {
      glob: [path.join(cwd, 'src/index.js')],
      result: ['build/src/index.js']
    },
    {
      glob: ['../src/*.js', '../test/**/*.js'],
      result: ['src/*.js', 'test/**/*.js']
    },
    {
      glob: ['src/../*.js', 'test/../**/*.js'],
      result: ['build/*.js', 'build/**/*.js']
    },
    {
      glob: ['gulp/*.js', '!gulp/clean.js'],
      result: ['build/gulp/*.js', '!build/gulp/clean.js']
    }
  ].forEach(test => {

    it(`Running destglob(${title(test.glob)}, 'build') is Ok`, function() {

      expect(destglob(test.glob, 'build')).to.eql(test.result);

    });

  });

});
