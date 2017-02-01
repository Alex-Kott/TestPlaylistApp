import React from 'react';
import $ from 'jquery';
import moment from 'moment';
import modal from 'react-modal';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import ReactModal from 'react-modal';

import './Playlist.less';


const Playlist = React.createClass({
	getInitialState(){
		return {
			videos: VIDEOS,
			showModal: false
		}
	},

	render(){
		return (
			<div id="playlist">
				<div id="search-add-block">
					<input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
					<FloatingActionButton 
						secondary={true} 
						onClick={this.addVideo}
						>
				      <ContentAdd />
				    </FloatingActionButton>
				 </div>
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
				<ReactModal 
					isOpen={this.state.showModal}
       			    contentLabel="Minimal Modal Example"
				>
					<button onClick={this.handleCloseModal}>Close Modal</button>
				</ReactModal>
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
	},

	addVideo(){
		this.handleOpenModal();
	},

	handleOpenModal () {
		this.setState({ showModal: true });
	},

	handleCloseModal(){
		this.setState({showModal: false });
	},

	handleSearch(event){
		var searchQuery = event.target.value.toLowerCase();
		var displayedVideos = VIDEOS.filter(function(el){
			var searchValue = el.title.toLowerCase();
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({
			videos: displayedVideos
		});
	}
})



var Video = React.createClass({
	w:300,

	h:220,

	render(){
		var create_date = moment.utc(this.props.created_at);
		return(
			<li  className="video" >
				<iframe className="iframe" width={this.w} height={this.h} src={this.props.url}  allowFullScreen></iframe>
				<div className="video-info">
					<div className="video-info">
						<span className="video-name">{this.props.id} {this.props.title} </span>
						<span className="video-created-date"> {create_date.format("MMMM Do YY, HH:mm")} </span>
					</div>
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





export default Playlist;