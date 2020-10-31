import React from 'react';

import defaultImg from '../../assets/fuliji.jpg';

import movingImg from '../../assets/ruhua.gif';

import { connect } from 'react-redux';

class Girl extends React.Component {
	render() {
		return (
			<div>
				<img
					src={this.props.status ? movingImg : defaultImg}
					alt=''
				></img>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('girl: ', state);
	return state;
};

export default connect(mapStateToProps)(Girl);
