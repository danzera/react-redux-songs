import { combineReducers } from 'redux';

// returns a static list of songs
// not necessarily something that would be kept in a reducer
// being used for example purposes
const songsReducer = () => {
	return [
		{ title: 'Smells Like Teen Spirit', duration: '5:01' },
		{ title: 'Bohemian Rhapsody', duration: '6:00' },
		{ title: 'Going to California', duration: '3:36' },
		{ title: 'Two Step', duration: '3:53' }
	];
}

// first arg, currently selected song
// defaulted to null to indicate there is no selected song initially when app boots up
const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
}

// combineReducers takes an object arg
// keys are the names for the keys of our desired state object
// values are the names of the keys' corresponding reducers
export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
