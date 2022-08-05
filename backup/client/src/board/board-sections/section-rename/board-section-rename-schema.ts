import * as Yup from 'yup';

const titleRequiredMessage = 'Title is required';

export const boardSectionRenameSchema = Yup.object().shape({
  title: Yup.string().min(1, titleRequiredMessage).max(255).required(titleRequiredMessage),
});
