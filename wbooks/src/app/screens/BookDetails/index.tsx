import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteBook } from '@interfaces/RouteBook';

function BookDetails() {
  const route = useRoute<RouteBook>();
  const { title } = route.params.item;
  return (
    <>
      <View>
        <Text>{title}</Text>
      </View>
    </>
  );
}

export default BookDetails;
