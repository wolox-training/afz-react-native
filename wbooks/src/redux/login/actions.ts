import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import { login } from '@services/LoginService';
import { Dispatch } from 'redux';
import { ApiOkResponse } from 'apisauce';
import actionsBook from '@redux/book/actions';
import { CommonActions } from '@react-navigation/native';

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
        dispatch(actionsBook.getBooks(headers));
        navigation.dispatch(
          CommonActions.navigate({
            name: 'Library'
          })
        );
      })
    ]
  })
};

export default actionCreators;
