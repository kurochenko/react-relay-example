import React, { Component, PropTypes } from 'react'
import Relay from 'react-relay'


class App extends Component {

	render() {
		console.log(this.props)
		const {pois} = this.props.pois
		const poiList = pois.map(p => <li key={p.id}>{p.name}</li>)
		return (
			<div>
				<h1>Poi</h1>
				<ul>{poiList}</ul>
			</div>
		)
	}
}


const AppContainer = Relay.createContainer(App, {
	fragments: {
		pois: () => Relay.QL`
			fragment on PoiList {
				pois {
					name
					id
				}
			}
		`
	}
})

export default AppContainer;