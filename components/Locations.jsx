var React = require('react');
var LocationStore = require('../stores/LocationStore');

var Locations = React.createClass({
	getInitialState() {
		return LocationStore.getState();
	},

	componentDidMount() {
		LocationStore.listen(this.onChange);

		LocationActions.fetchLocations();
	},

	componentWillUnmount() {
		LocationStore.unlisten(this.onChange);
	},

	onChange(state) {
		this.setState(state);
	},

	render() {
		return (
			if (this.state.errorMessage) {
			    return (
			      <div>Something is wrong</div>
			    );
			  }

			  if (!this.state.locations.length) {
			    return (
			      <div>Loading</div>
			    );
			  }

			<ul>
				{this.state.locations.map(locations => {
					return (
						<li>{location.name}</li>
					);
				})}
			</ul>
		);
	}
});

