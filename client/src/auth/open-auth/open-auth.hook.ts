import { BASE_URL } from 'config';
import { useOpenAuthQuery } from './open-auth.gql';

export const useOpenAuth = () => {
  const { data, loading } = useOpenAuthQuery();

  return {
    isGoogleProviderDisConnected: !data?.isGoogleProviderConnected,
    isGithubProviderDisconnected: !data?.isGithubProviderConnected,
    loading,
  };
};
