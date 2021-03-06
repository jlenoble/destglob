# destglob

Small utility to generate a dest glob from a glob and a dest

  * [Usage](#usage)
  * [License](#license)


## Usage

```js
import destglob from 'destglob';

destglob('src/**/*.js', 'tmp'); // ['tmp/src/**/*.js'];

// process.cwd() === '/home/me/myproject'
destglob('/home/me/myproject/src/**/*.js', 'tmp'); // ['tmp/src/**/*.js'];

destglob(['src/**/*.js', 'test/**/*.js'], 'tmp'); // ['tmp/src/**/*.js', 'tmp/test/**/*.js'];

destglob('../src/**/*.js', 'tmp'); // ['src/**/*.js'];

destglob('src/../**/*.js', 'tmp'); // ['tmp/**/*.js'];

```js
// File "./usage.test.ts"
import dest from "destglob";

const defaultArgs = [];

// destglob(...defaultArgs);
```


## License

destglob is [MIT licensed](./LICENSE).

© 2016-2020 [Jason Lenoble](mailto:jason.lenoble@gmail.com)

