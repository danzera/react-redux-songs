// action creator
export const selectSong = song => {
	// must return an action
	// actions are just objects with a type property, and optionally, a payload property
	return {
		// action types are conventionally UPPERCASED
		type: 'SONG_SELECTED',
		payload: song
	};
}
