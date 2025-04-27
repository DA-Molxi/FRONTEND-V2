
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 705, hash: 'b2c29114c8538bfbd7eef138a9fa8868fb3dd15732b827106fc02e5356766afa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'b2431d7ee775f3e20aa2f8bba72f768c7941c8e832b82746626da9914201c8fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7180, hash: '4412f2d64656ae027a88a3bccedf8d68f58a40699cda5f846e7c8fdd48e0e7d2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IOQZTRB7.css': {size: 1187, hash: 'ekYTHvV+q0Q', text: () => import('./assets-chunks/styles-IOQZTRB7_css.mjs').then(m => m.default)}
  },
};
