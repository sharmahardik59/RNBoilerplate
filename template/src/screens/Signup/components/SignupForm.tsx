import CustomButton from '@components/atoms/ButtonContainer';
import {CustomTextInput} from '@components/molecules';
import RememberMe from '@components/molecules/RememberMe';
import imagePath from '@constants/imagePath';
import {useDispatch, useSelector} from '@redux/hooks';
import {alertFunction} from '@utils/index';
import {verticalScale} from '@utils/scaling';
import validationForm from '@utils/validationForm';
import {Formik} from 'formik';
import React, {createRef, Fragment, useCallback, useRef, useState} from 'react';
import type {TextInputInstance} from 'react-native';
import {Keyboard} from 'react-native';
import {signup} from 'src/services/authService';

// Form field reference declaration
const inputRef = {
  email: createRef<TextInputInstance>(),
  password: createRef<TextInputInstance>(),
};

const SignupForm = (): React.JSX.Element => {
  // Redux variables
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.common.isLoading);

  // Reference Variableș
  const signupFormRef = useRef(null);

  // Local state declaration
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // Signup button callback
  const onSignup = useCallback(
    async ({email, name, password}: {email: string; name: string; password: string}) => {
      dispatch(signup({email, name, password}));
    },
    [dispatch],
  );

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      innerRef={signupFormRef}
      onSubmit={onSignup}
      validationSchema={validationForm.signup}>
      {({...params}) => {
        return (
          <Fragment>
            <CustomTextInput
              error={params.touched.name ? params.errors.name : null}
              id="name"
              label="NAME"
              leftImage={imagePath.icUser}
              onBlur={params.handleBlur('name')}
              onChangeText={params.handleChange('name')}
              onSubmitEditing={() => inputRef.email.current?.focus()}
              placeholder="ENTER_YOUR_NAME"
              returnKeyType="next"
              style={{marginBottom: verticalScale(24)}}
              value={params.values.name}
            />
            <CustomTextInput
              autoCapitalize="none"
              autoCorrect={false}
              error={params.touched.email ? params.errors.email : null}
              id="email"
              keyboardType="email-address"
              label="EMAIL"
              leftImage={imagePath.icEmail}
              onBlur={params.handleBlur('email')}
              onChangeText={params.handleChange('email')}
              onSubmitEditing={() => inputRef.password.current?.focus()}
              placeholder="ENTER_YOUR_EMAIL"
              ref={inputRef.email}
              returnKeyType="next"
              style={{marginBottom: verticalScale(24)}}
              value={params.values.email}
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
              ref={inputRef.password}
              returnKeyType="done"
              rightImage={secureTextEntry ? imagePath.icPassword : imagePath.icPasswordShow}
              secureTextEntry={secureTextEntry}
              style={{marginBottom: verticalScale(24)}}
              value={params.values.password}
            />
            <RememberMe onPressForgot={() => alertFunction('Password', 'Forgot Password')} />
            <CustomButton
              isLoading={isLoading}
              label="SIGNUP"
              onPress={() => params.handleSubmit()}
            />
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
