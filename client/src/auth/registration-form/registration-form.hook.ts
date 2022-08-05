import { useRegistrationMutation } from './registration-form.gql';

export const useRegistration = () => {
  const [register, { loading }] = useRegistrationMutation({
    onError(err) {
      console.log(JSON.stringify(err, null, 2));
    },
  });

  return { register, loading };
};
