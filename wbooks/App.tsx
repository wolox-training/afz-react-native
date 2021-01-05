import React from 'react';

import App from './src/app';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function index() {
  return <App />;
}
