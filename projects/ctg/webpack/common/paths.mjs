import path from 'path';
import url from 'url';
import glob from 'fast-glob';

const __dirname = path.dirname(url.fileURLToPath(new URL(import.meta.url)));
const root = path.resolve(__dirname, '../../');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');
const distPf = path.join(root, 'dist-pf');
const pagesDir = path.join(src, 'views', 'pages');
const pagesPaths = glob.sync(path.join(pagesDir, '**', '[!_]*.pug').replace(/\\/g, '/'), {
  deep: 2
});
const entries = Object.fromEntries(pagesPaths.map(p => [path.parse(p).name, path.join(p)]));

export const PATHS = {
  root,
  src,
  dist,
  distPf,
  pagesDir,
  pagesPaths,
  entries
};
