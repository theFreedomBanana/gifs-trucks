import React from 'react';
import { Link } from 'react-router-dom';

class GifList extends React.Component {
	
	constructor(props) {
    super(props);
	}

	render() {
		let gifs = [];
		if (this.props.collection) {
			this.props.collection.forEach( (el, i) => {
				gifs.push(
					<div className="col-sm-2">
						<Link to={'/' + i}  onClick={this.props.sendSelectedGif.bind(this, i)}>
							<img src={el.images.fixed_height_small.url} alt=""/>
						</Link>
					</div>
				)
			})
		}

		return (
			<div className="container">
				<div className="row">
					<h2>Trucks List</h2>
					{gifs}
				</div>
			</div>
		)
	}
}

export default GifList
