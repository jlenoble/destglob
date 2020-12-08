## Usage !heading

```js
import destglob from 'destglob';

destglob('src/**/*.js', 'tmp'); // ['tmp/src/**/*.js'];

// process.cwd() === '/home/me/myproject'
destglob('/home/me/myproject/src/**/*.js', 'tmp'); // ['tmp/src/**/*.js'];

destglob(['src/**/*.js', 'test/**/*.js'], 'tmp'); // ['tmp/src/**/*.js', 'tmp/test/**/*.js'];

destglob('../src/**/*.js', 'tmp'); // ['src/**/*.js'];

destglob('src/../**/*.js', 'tmp'); // ['tmp/**/*.js'];

#include "build/docs/examples/usage.test.md"
