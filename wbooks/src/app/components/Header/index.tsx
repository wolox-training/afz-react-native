import React from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Header } from '@interfaces/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import navBar from '@assets/bc_nav_bar.png';
import icBack from '@assets/ic_back.png';
import icSearch from '@assets/ic_search.png';
import Colors from '@constants/Colors';
import { actionsBook } from '@redux/book/actions';
import { BookState } from '@interfaces/BookState';

import styles from './styles';

interface State {
  book: BookState;
}

function HeaderContainer({ route, title }: Header) {
  const dispatch = useDispatch();

  const { name } = route.scene.route;

  const navigation = useNavigation();
  const back = () => navigation.goBack();
  const search = () => navigation.navigate('ListSearch');
  const onTextSearchChange = (value: React.SetStateAction<string>) =>
    dispatch(actionsBook.setSearch(`${value}`));
  const clear = () => dispatch(actionsBook.setSearch(''));
  const textSearch = useSelector((state: State) => state.book.search);

  return (
    <ImageBackground source={navBar} style={styles.headerImage}>
      {name === 'BookDetails' && (
        <TouchableOpacity onPress={back}>
          <Image source={icBack} style={styles.buttonBack} />
        </TouchableOpacity>
      )}
      {name === 'ListSearch' && (
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={back} style={styles.buttonSearchContainer}>
            <Image source={icSearch} style={styles.buttonSearch} />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <TextInput
              placeholder="Search"
              style={styles.textInput}
              onChangeText={onTextSearchChange}
              value={textSearch}
            />
            <TouchableOpacity
              onPress={clear}
              style={[
                styles.clearContainer,
                { backgroundColor: textSearch === '' ? Colors.opacityColor : Colors.red }
              ]}>
              <Text style={styles.buttonClear}>x</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Text style={styles.titleHeader}>{title}</Text>
      {name === 'BookList' && (
        <View style={styles.searchHomeContainer}>
          <TouchableOpacity onPress={search} style={styles.buttonSearchContainer}>
            <Image source={icSearch} />
          </TouchableOpacity>
        </View>
      )}
    </ImageBackground>
  );
}

export default HeaderContainer;
