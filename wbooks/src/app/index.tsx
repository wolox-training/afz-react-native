/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import BookList from '@app/components/BookList';

declare global {
  interface Console {
    tron: any;
  }
}

const App = () => {
  return (
    <>
      <BookList />
    </>
  );
};

export default App;
