import React from 'react';
import { connect } from 'react-redux';

const SongDetail = props => {
	console.log('props', props)
	return (
		<div className="song-detail">
			SongDetail
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		song: state.selectedSong
	};
}

export default connect(mapStateToProps)(SongDetail);
