import React from 'react';
import TextField from 'material-ui/lib/text-field';
import {Col} from 'react-bootstrap';
import Video from './Video.jsx';

const AddVideoBlock = React.createClass({
	getInitialState(){
		return {
			linkError: "",
			videoLink: "2g811Eo7K8U"
		}
	},

	render(){
		return (
			<div>
				<Col  xs={12} md={4} lg={6} >
					<TextField
						id="videoLink"
						hintText="Video link"
						onChange={this.onChangeVideoLink}
						errorText={this.linkError}
						/><br />
				</Col>
				<Col xs={12} md={8} lg={6}>
					<div id="player">
						<Video
							videoId={this.state.videoLink}
						/>
					</div>
				</Col>
			</div>
			)
	},

	onChangeVideoLink(e){

		
		if(!this.checkVideoLink){

		}
		this.setState({
			videoLink: e.target.value
		})
		console.log("Target value: "+e.target.value);//*/
	},

	checkVideoLink(){
		return true;
	}
})

export default AddVideoBlock;