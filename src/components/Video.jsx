import React from 'react';
import YouTube from 'react-youtube';


const Video = React.createClass({
	render() {
	    const opts = {
	        height: '390',
	        width: '640',
	        playerVars: { // https://developers.google.com/youtube/player_parameters 
	            autoplay: 1
	        }
	    };

	    console.log("this.props.videoLink = "+this.props.videoId)

	    return (
	      <YouTube
	        videoId={this.props.videoId}
	        opts={opts}
	        onReady={this._onReady}
	      />
	    );
	},

	_onReady(event) {
	    // access to player in all event handlers via event.target 
	    event.target.pauseVideo();
	  }
});

export default Video;