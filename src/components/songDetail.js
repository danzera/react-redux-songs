import React from 'react';
import { connect } from 'react-redux';

// song passed in from state via mapStateToProps and connect functions below
const SongDetail = ({ song }) => {
	// conditionally render content if no song has been selected
	if (!song) {
		return (
			<div className="song-detail">Select a song</div>
		);
	}

	// content to render if a song has already been selected
	return (
		<div className="song-detail">
			<h3>Details for:</h3>
			<p>
				Title: {song.title}
				<br />
				Duration: {song.duration}
			</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		song: state.selectedSong
	};
}

export default connect(mapStateToProps)(SongDetail);
