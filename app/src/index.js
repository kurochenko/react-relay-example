import React from 'react'
import { render } from 'react-dom'
import Relay, {RootContainer, DefaultNetworkLayer} from 'react-relay'

import App from './app'

Relay.injectNetworkLayer(
	new DefaultNetworkLayer('http://api.mytripman.com/graphql')
);

console.log(RootContainer)
render(
	<RootContainer
		Component={App}
		route={{
			queries: {
				pois: () => Relay.QL`query { pois  }`
			},
			name: 'AppRoute',
		}}
	/>,
	document.getElementById('app')
);