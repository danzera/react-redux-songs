import React from 'react';
// webpack automatically imports the index.js file, just need to reference the directory, not the file
import actions from '../actions';
import SongList from './songList';

const App = () => {
	return (
		<div className="app">
			<SongList />
		</div>
	);
}

export default App;
