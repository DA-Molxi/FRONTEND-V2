
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
    'index.html': {size: 2455, hash: '516d5d9b95f76535bcf1d8af5aa7251ab1e48e098c6e77718c45589c352d5316', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IOQZTRB7.css': {size: 1187, hash: 'ekYTHvV+q0Q', text: () => import('./assets-chunks/styles-IOQZTRB7_css.mjs').then(m => m.default)}
  },
};
