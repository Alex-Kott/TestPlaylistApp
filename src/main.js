import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';


import Playlist from './components/Playlist.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

renderApp();


function renderApp(){
	ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Playlist} />
	</Router>,
	document.getElementById('content')
	);
}