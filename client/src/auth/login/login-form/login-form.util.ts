import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = Yup.object().shape({
  password: Yup.string().min(5).max(255).required(),
  name: Yup.string().min(1).max(255).required(),
});

export const loginResolver = yupResolver(loginSchema);
