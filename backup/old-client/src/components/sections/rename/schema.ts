import * as Yup from 'yup';

export const renameSectionValidationSchema = Yup.object().shape({
  title: Yup.string().min(1).max(255).required()
});
