import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

// Update the GraphQL endpoint to any instance of GraphQL that you like
const GRAPHQL_URL = process.env.API_URL || "https://93c28bf2.ngrok.io";

const link = createHttpLink({
	fetch, // Switches between unfetch & node-fetch for client & server.
	uri: GRAPHQL_URL + "/graphql",
});


// Export a HOC from next-with-apollo
// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(({ initialState, ctx }) => {
		new ApolloClient({
			ssrMode: Boolean(ctx),
			link: link,
			cache: new InMemoryCache()
				//  rehydrate the cache using the initial data passed from the server:
				.restore(initialState || {}),
		})
	} );
