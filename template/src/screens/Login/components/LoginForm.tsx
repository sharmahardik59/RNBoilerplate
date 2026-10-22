import {ButtonContainer} from '@components/atoms';
import {CustomTextInput, RememberMe} from '@components/molecules';
import imagePath from '@constants/imagePath';
import {useDispatch, useSelector} from '@redux/hooks';
import {alertFunction} from '@utils/index';
import {verticalScale} from '@utils/scaling';
import validationForm from '@utils/validationForm';
import {Formik} from 'formik';
import React, {Fragment, useCallback, useRef, useState} from 'react';
import type {TextInputInstance} from 'react-native';
import {Keyboard} from 'react-native';
import {login} from 'src/services/authService';

const LoginForm = (): React.JSX.Element => {
  // Reference variables
  const loginFormRef = useRef(null);
  const passwordInputRef = useRef<null | TextInputInstance>(null);

  // Redux variables
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.common.isLoading);

  // Local state declaration
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Login button callback
  const onLogin = useCallback(({password, username}: {password: string; username: string;}) => {
    dispatch(login({password, username}));
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        password: 'emilyspass',
        username: 'emilys',
      }}
      innerRef={loginFormRef}
      onSubmit={onLogin}
      validationSchema={validationForm.login}>
      {({...params}) => {
        return (
          <Fragment>
            <CustomTextInput
              autoCapitalize="none"
              autoCorrect={false}
              error={params.touched.username ? params.errors.username : null}
              id="username"
              label="USERNAME"
              leftImage={imagePath.icUser}
              onBlur={params.handleBlur('username')}
              onChangeText={params.handleChange('username')}
              onSubmitEditing={() => passwordInputRef.current?.focus()}
              placeholder="ENTER_YOUR_USERNAME"
              returnKeyType="next"
              style={{marginBottom: verticalScale(16)}}
              value={params.values.username}
            />
            <CustomTextInput
              error={params.touched.password ? params.errors.password : null}
              id="password"
              label="PASSWORD"
              leftImage={imagePath.icLock}
              onBlur={params.handleBlur('password')}
              onChangeText={params.handleChange('password')}
              onPressRight={() => setSecureTextEntry(!secureTextEntry)}
              onSubmitEditing={() => Keyboard.dismiss()}
              placeholder="ENTER_YOUR_PASSWORD"
              ref={passwordInputRef}
              returnKeyType="done"
              rightImage={secureTextEntry ? imagePath.icPassword : imagePath.icPasswordShow}
              secureTextEntry={secureTextEntry}
              style={{marginBottom: verticalScale(30)}}
              value={params.values.password}
            />
            <RememberMe onPressForgot={() => alertFunction('Password', 'Forgot Password')} />
            <ButtonContainer
              isLoading={isLoading}
              label="LOG_IN"
              onPress={() => params.handleSubmit()}
            />
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
