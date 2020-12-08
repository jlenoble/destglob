import path from "path";

function singleDestglob(glb, dest, base = process.cwd()) {
  const a = glb.split("**");
  const neg = a[0][0] === "!";

  if (neg) {
    a[0] = a[0].substring(1);
  }

  a[0] = path.join(dest, path.relative(base, a[0]));

  if (neg) {
    a[0] = "!" + a[0];
  }

  if (a.length === 1) {
    return a[0];
  } else {
    return path.join(a[0], "**", a[1]);
  }
}

export default function destglob(glob, dest, base) {
  if (Array.isArray(glob)) {
    return glob.map((glb) => singleDestglob(glb, dest, base));
  }
  return [singleDestglob(glob, dest, base)];
}
