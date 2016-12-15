import path from 'path';

function singleDestglob (glb, dest, base = process.cwd()) {
  let a = glb.split('**');
  a[0] = path.join(dest, path.relative(base, a[0]));

  if (a.length === 1) {
    return a[0];
  } else {
    return path.join(a[0], '**', a[1]);
  }
}

export default function destglob (glob, dest) {
  if (Array.isArray(glob)) {
    return glob.map(glb => singleDestglob(glb, dest));
  }
  return [singleDestglob(glob, dest)];
}
