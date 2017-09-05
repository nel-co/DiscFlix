import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';
import WatchList from './WatchList';
import Favorites from './Favorites';
import ChannelSection from './ChannelSection';

//const apiKey = 'AIzaSyCXk7AgRlrxtHXPe-FP_IxMLHZE7C-xzf8'; // local api
const apiKey = 'AIzaSyC8EEudlEjgSVxN5dc9ntH9Ubwx4N5jc4E'; //apikey for heroku 

const urls = [
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UU_otq12MLlspCliJgL2u02A&key=${apiKey}`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UUmGyCEbHfY91NFwHgioNLMQ&key=${apiKey}`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UUy1Rr-GkiL8vlPApKsw6SuA&key=${apiKey}`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UU_VFGL2488ElJvThosFxaRQ&key=${apiKey}`
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jomezVideos: [],
      spinVideos: [],
      centralVideos: [],
      dggVideos: [],
      //add dg tutorials
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      watchList: JSON.parse(localStorage.getItem('watchList')) || []
    }
  }

  componentDidMount() {
    let promises = urls.map(url => fetch(url).then(response => response.json()));
    Promise.all(promises).then(results => {
      this.setState({
        spinVideos: results[0].items,
        jomezVideos: results[1].items,
        centralVideos: results[2].items,
        dggVideos: results[3].items
      });
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ () => 
            <ChannelSection 
              jomezVideos={this.state.jomezVideos}
              spinVideos={this.state.spinVideos}
              centralVideos={this.state.centralVideos}
              dggVideos={this.state.dggVideos}
              favorites={this.state.favorites}
              watchList={this.state.watchList}
            /> } 
           />
           <Route path='/watchlist' component={ () => 
            <WatchList
              watchList={this.state.watchList}
            /> } 
           />
           <Route path='/favorites' component={ () => 
            <Favorites 
              favorites={this.state.favorites}
            /> } 
           />
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  favorites: PropTypes.array,
  watchList: PropTypes.array
};