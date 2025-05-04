
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
    'index.csr.html': {size: 705, hash: '279f00bda5bcf5f9a28f4792cd54b0cf5a7c9cb257848fe435316efb2f1e2956', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '60cb9e4dcad722304e5c5c7df6f98a1e394324c9f5b4e06d4dd41565467a7667', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 9146, hash: 'c26f5c57f9aabd0d5409192b86be787cb7672099720ee54f656707c5593de955', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IOQZTRB7.css': {size: 1187, hash: 'ekYTHvV+q0Q', text: () => import('./assets-chunks/styles-IOQZTRB7_css.mjs').then(m => m.default)}
  },
};
