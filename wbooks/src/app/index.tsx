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
import { BOOKS_MOCK } from '@constants/mockBooks';
import ItemBook from '@app/components/ItemBook';

declare global {
  interface Console {
    tron: any;
  }
}

const App = () => {
  return (
    <>
      <ItemBook title={BOOKS_MOCK[2].title} author={BOOKS_MOCK[2].author} imageUrl={BOOKS_MOCK[2].imageUrl} />
    </>
  );
};

export default App;
