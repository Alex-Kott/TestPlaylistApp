import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';


import App from './App.jsx';
import Playlist from './components/Playlist.jsx';

renderApp();


function renderApp(){
	ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/playlist" component={Playlist} />
		</Route>
	</Router>,
	document.getElementById('mount-point')
	);
}