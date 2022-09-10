import { setupServer } from 'msw/node';
import { graphql, GraphQLContext, GraphQLRequest, ResponseResolver } from 'msw';

export const REQUEST_MS_DELAY = 1;

// This configures a request mocking server with the given request handlers.
export const server = setupServer();

type QueryDefault = Record<string, unknown>;

interface PayloadError {
  message: string;
  path: string[];
}

interface Payload<T extends QueryDefault> {
  data?: T;
  errors?: PayloadError[];
}

const setupResponseResolver = <T extends QueryDefault>({
  data,
  errors,
}: Payload<T>): ResponseResolver<GraphQLRequest<any>, GraphQLContext<T>, any> => {
  return (req, res, ctx) => {
    const transformers = [ctx.delay(REQUEST_MS_DELAY)];

    if (data) transformers.push(ctx.data(data));
    if (errors) transformers.push(ctx.errors(errors));

    return res(...transformers);
  };
};

export const setupRequestHandlerMutation = <T extends QueryDefault>(operationName: string, payload: Payload<T>) =>
  server.use(graphql.mutation(operationName, setupResponseResolver<T>(payload)));

export const setupRequestHandlerQuery = <T extends QueryDefault>(operationName: string, payload: Payload<T>) =>
  server.use(graphql.query(operationName, setupResponseResolver<T>(payload)));
