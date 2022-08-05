import * as Yup from 'yup';

export const SchemaPasswordRecovery = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
  name: Yup.string().min(1).max(255).required()
});
