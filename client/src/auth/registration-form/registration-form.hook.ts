import { useRegistrationMutation } from './registration-form.generated';

export const useRegistration = () => {
  const [register, { loading }] = useRegistrationMutation();
  return { register, loading };
};
