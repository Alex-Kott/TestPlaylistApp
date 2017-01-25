import React from 'react';
import $ from 'jquery';


const Playlist = React.createClass({
	getInitialState(){
		return {
			videos: VIDEOS
		}
	},

	render(){
		return (
			<div className="playlist">
				<ul className="videos">
					{
						this.state.videos.map(function(el){
							return <Video 
								key={el.id}
								title={el.title}
								url={el.url}
								created_at={el.created_at}
								order={el.order}
								provider={el.provider}
								/>;
						})
					}
				</ul>
			</div>
			)
	},

	getVideos(){
		$.ajax({
			url:'./action.php?getVideos',
			method:'POST',
			success:function(data){
				console.log("TEST MESSAGE")
			}
		})
	}
})

var Video = React.createClass({
	w:300,

	h:150,

	render(){
		return(
			<li  className="video" >
				<iframe width={this.w} height={this.h} src={this.props.url} frameBorder="0" allowFullScreen></iframe>
				<div className="video-info">
					<div className="video-name">{this.props.id} {this.props.title}</div>
					<div className="video-created-date">{this.props.created_at} </div>
				</div>
			</li>
			)
	}
})



var VIDEOS = [
	{
		id:1,
		title:'Супер папа может всё',
		url:'https://www.youtube.com/embed/UBL2O1WPiCE',
		created_at:1451595600,
		order:1,
		provider:'youtube'
	},
	{
		id:2,
		title:'Угадали с подарком',
		url:'https://www.youtube.com/embed/eBxTbBMFnp0',
		created_at:1454360400,
		order:2,
		provider:'youtube'
	},

]




getVideos();

export default Playlist;