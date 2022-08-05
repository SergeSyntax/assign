import * as Yup from 'yup';
import { Accessibility } from '../../../../__generated__/globalTypes';

export const projectCreateSchema = Yup.object({
  title: Yup.string().min(1).max(255).required(),
  accessibility: Yup.string().oneOf(Object.values(Accessibility)).required(),
}).required();
