import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
const client = new ApolloClient({link:createHttpLink({uri:process.env.REACT_APP_GRAPHQL_URL || '/graphql',credentials:'include'}),cache:new InMemoryCache(),defaultOptions:{watchQuery:{fetchPolicy:'network-only'},query:{fetchPolicy:'network-only'}}});
export default client;
