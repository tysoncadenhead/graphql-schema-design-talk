import { server } from './server';

export default (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return server.createHandler({
        cors: {
            origin: '*',
            credentials: true,
        },
    })(event, context, callback);
};