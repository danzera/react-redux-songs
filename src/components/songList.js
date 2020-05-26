import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
	getSongList() {
		return this.props.songs.map((song, index) => {
			return (
				<div className="song" key={index}>
					{song.title}
				</div>
			);
		});
	}

	render() {
		const songList = this.getSongList();
		
		return (
			<div className="song-list">
				{songList}
			</div>
		);
	}
}

// this function is conventionally named mapStateToProps (not required)
// can be a function keyword or an arrow function
// it receives all of the state within the redux store as an arg
const mapStateToProps = (state) => {
	// the object returned from this function gets injected into our component as props
	// i.e. this.props === { songs: state.songs }
	// this is how we get data from our redux store in our components
	return {
		songs: state.songs
	};
}

// connect is a function that returns a function
// need to call the connect function via connect()
// and invoke the function that is returned via (SongList)
export default connect(mapStateToProps)(SongList);
