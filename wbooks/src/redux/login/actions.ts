import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { login } from '@services/LoginService';
import { Dispatch } from 'redux';
import { ApiOkResponse } from 'apisauce';
import actionsBook from '@redux/book/actions';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const actions = createTypes(completeTypes(['LOGIN']), '@@LOGIN');

export const targets = { user: 'user' };

const actionCreators = {
  login: (email: string, password: string, navigation: any) => ({
    type: actions.LOGIN,
    target: targets.user,
    service: login,
    payload: { email, password },
    injections: [
      withPostSuccess((dispatch: Dispatch<any>, response: ApiOkResponse<any>) => {
        const { headers } = response;
        try {
          const jsonValue = JSON.stringify(headers);
          AsyncStorage.setItem('userHeaders', jsonValue);
          dispatch(actionsBook.getBooks(headers));

          navigation.dispatch(
            CommonActions.navigate({
              name: 'Library'
            })
          );
        } catch (e) {
          // eslint-disable-next-line no-console
          if (__DEV__) console.tron.log(`Error storaging data in local storage: ${e}`);
        }
      })
    ]
  })
};

export default actionCreators;
