import * as Yup from 'yup';

export const createProjectValidationSchema = Yup.object().shape({
  title: Yup.string().min(1).max(255).required(),
  accessibility: Yup.boolean().required()
});
