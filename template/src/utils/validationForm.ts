import * as Yup from 'yup';

const usernameRegEx : RegExp = /^[\dA-Za-z]{6,16}$/
const passwordRegEx : RegExp = /^(?=.*?\d)(?=.*?[A-Za-z]).{6,32}$/

const validationForm = {
login: Yup.object({
  password: Yup.string().required('PASSWORD_EMPTY').trim(),
    username: Yup.string()
    .required('USERNAME_EMPTY').matches(usernameRegEx, 'INVALID_USERNAME')
    .trim(),
  }),
  signup: Yup.object({
    email: Yup.string()
    .required('EMAIL_EMPTY')
    .email('VALID_EMAIL')
    .trim(),
    name: Yup.string().required('NAME_EMPTY'),
    password: Yup.string().required('PASSWORD_EMPTY').matches(passwordRegEx, 'INVALID_PASSWORD').trim(),
  }),
};

export default validationForm;