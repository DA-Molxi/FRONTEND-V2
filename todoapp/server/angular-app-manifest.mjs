
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
    'index.csr.html': {size: 705, hash: '9d904fa021a999b35eaa2f7bbb0848ede080c27abae45a8d586d32851c413fed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: 'e7bb83a8716f7982bc3bc8993e41a8da512f49f4685910cdedb75991542024e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8490, hash: 'ebcd582f1fab1f9972b5635553f6877982849f28d4161b10e8a00b00f5da5ec9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-IOQZTRB7.css': {size: 1187, hash: 'ekYTHvV+q0Q', text: () => import('./assets-chunks/styles-IOQZTRB7_css.mjs').then(m => m.default)}
  },
};
