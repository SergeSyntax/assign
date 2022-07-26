import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginDrainHttpServerOptions,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginUsageReportingDisabled,
  Config,
} from 'apollo-server-core';
import { faker } from '@faker-js/faker';
import { isEnv, Env } from '@/common/config/environment';

const landingPageDefaultVariables = {
  createUserData: {
    email: faker.internet.email(),
    password: faker.music.songName(),
    name: faker.name.firstName(),
  },
};

const landingPagePlugin = isEnv(Env.Production)
  ? ApolloServerPluginLandingPageDisabled()
  : ApolloServerPluginLandingPageLocalDefault({
      variables: landingPageDefaultVariables as any,
      includeCookies: true,
      embed: true,
    });

/**
 *
 * @param httpServer http module server instance
 * @link https://www.apollographql.com/docs/apollo-server/api/plugin/drain-http-server/#using-the-plugin
 * @link https://www.apollographql.com/docs/apollo-server/api/plugin/usage-reporting/
 * @returns plugins https://www.apollographql.com/docs/apollo-server/integrations/plugins/
 */
export const getPlugins = (
  httpServer: ApolloServerPluginDrainHttpServerOptions['httpServer'],
): Config['plugins'] => {
  return [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    ApolloServerPluginUsageReportingDisabled(),
    landingPagePlugin,
  ];
};
