import "bootstrap/dist/css/bootstrap.min.css";
import "../public/assets/vendor/nucleo/css/nucleo.css";
import "../public/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../public/assets/scss/argon-design-system-react.scss";

import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/apollo";

function App({ Component, pageProps, apollo }) {
	return (
		<ApolloProvider client={apollo}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default withData(App);
