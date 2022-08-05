import * as Yup from 'yup';

export const schemaLogin = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required()
});
