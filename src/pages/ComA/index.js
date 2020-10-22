import React from 'react';
import { connect } from 'react-redux';

class ComA extends React.Component {
	handleClick = () => {
		console.log(this.props);
		this.props.sendAction();
	};

	render() {
		return <button onClick={this.handleClick}>+</button>;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		sendAction: () => {
			dispatch({
				type: 'increment',
			});
		},
	};
};

export default connect(null, mapDispatchToProps)(ComA);
