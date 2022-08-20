import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().min(3).max(255).email().required(),
  password: Yup.string().min(5).max(255).required(),
});

export const loginResolver = yupResolver(loginSchema);
