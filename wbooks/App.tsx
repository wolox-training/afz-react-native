import React from 'react';

import App from './src/app';

if (__DEV__) {
  import('./src/config/reactotronConfig');
}

export default function index() {
  return <App />;
}
