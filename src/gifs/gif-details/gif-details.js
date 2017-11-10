import React from 'react';
import './gif-details.css';

class GifDetails extends React.Component {
		constructor(props) {
    super(props);
	}

	render() {
		return (
			<div>
				<h2>Gif Details</h2>
				<img src={this.props.gifDetails.images.original.url}/>
				<h3>{this.props.gifDetails.title}</h3>
			</div>
		)
	}

}

export default GifDetails;
