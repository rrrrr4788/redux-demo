import React from 'react';

import defaultImg from '../../assets/liumou.jpg';

import movingImg from '../../assets/liumou.gif';

import { connect } from 'react-redux';

class Boy extends React.Component {
	state = {
		isSent: false,
	};
	handleClick = () => {
		let { isSent } = this.state;

		if (!isSent) {
			this.props.activate();
		} else {
			this.props.deactivate();
		}

		this.setState({ isSent: !isSent });
	};
	render() {
		return (
			<div>
				<img
					src={this.state.isSent ? movingImg : defaultImg}
					alt=''
				></img>
				<button onClick={this.handleClick}>
					{this.state.isSent ? '👴🏀宁别动了' : '动！'}
				</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		activate: () => {
			dispatch({ type: 'activate_gif' });
		},
		deactivate: () => {
			dispatch({ type: 'deactivate_gif' });
		},
	};
};

export default connect(null, mapDispatchToProps)(Boy);
