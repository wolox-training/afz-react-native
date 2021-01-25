import React from 'react';
import { Image, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import bcInicio from '@assets/bc_inicio.png';
import wbooksLogo from '@assets/wbooks_logo.png';
import actionCreators from '@redux/login/actions';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';

function Login() {
  const { handleSubmit, control, errors } = useForm();

  const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
  const PASSWORD_REGEX = /^([A-Z]|[0-9]){5,}$/i;

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const onSubmit = (data: any) => {
    dispatch(actionCreators.login(data.user, data.password, navigation));
  };
  const user = useSelector((state: any) => state.login);

  return (
    <ImageBackground source={bcInicio} style={styles.imageBackground}>
      <Image source={wbooksLogo} style={styles.logo} />
      <Controller
        name="user"
        control={control}
        rules={{
          required: { value: true, message: 'User is required' },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Not a valid email'
          }
        }}
        defaultValue=""
        render={({ onChange, value }) => (
          <>
            <TextInput
              style={styles.textInput}
              placeholder="Usuario"
              value={value}
              onChangeText={text => onChange(text)}
            />
            <Text style={styles.textError}>{errors?.user?.message}</Text>
          </>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: { value: true, message: 'Password is required' },
          pattern: {
            value: PASSWORD_REGEX,
            message: 'Not password length valid'
          }
        }}
        defaultValue=""
        render={({ onChange, value }) => (
          <>
            <TextInput
              style={styles.textInput}
              placeholder="Contraseña"
              value={value}
              secureTextEntry
              textContentType="password"
              onChangeText={text => onChange(text)}
            />
            <Text style={styles.textError}>{errors?.password?.message}</Text>
          </>
        )}
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textButton}>INGRESAR</Text>
      </TouchableOpacity>
      {user.userError && <Text style={styles.textError}>{user.userError}</Text>}
      <Text style={styles.footer}>Designed, developed and used by woloxers</Text>
    </ImageBackground>
  );
}

export default Login;
