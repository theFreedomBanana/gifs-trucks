import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GifList from './gif-list/gif-list.js';
import GifDetails from './gif-details/gif-details.js';


class Gifs extends React.Component {
	
	constructor(props) {
    super(props);
	  this.state = {
			gifCollection: null,
			selectedGif: null
	  };
	  this.getSelectedGif;
	}

	componentWillMount() {
    this.fetchServices();
  }

	fetchServices() {
		const url = "http://api.giphy.com/v1/gifs/search?q=truck&api_key=pza4YeCPJAHnEqRxVxwiiNIK0EhPKixJ&limit=50"

		fetch(url)
  	.then( res => res.json() )
  	.then( val => this.setState({gifCollection: val.data}) )
	}

	render() {
		this.getSelectedGif = (index) => {
			this.setState({selectedGif: this.state.gifCollection[index]})
		}

		let gifList = () => {
			return <GifList collection={this.state.gifCollection} sendSelectedGif={this.getSelectedGif}></GifList>;
		}

		let gifDetails = () => {
			return <GifDetails gifDetails={this.state.selectedGif}></GifDetails>;
		}

		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={gifList}/>
					<Route path="/:id" component={gifDetails}/>
		  	</Switch>
		  </BrowserRouter>
	  )
	}
}

export default Gifs;
