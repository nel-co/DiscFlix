import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/App.css';
import WatchList from './WatchList';
import Favorites from './Favorites';
import ChannelSection from './ChannelSection';

const urls = [
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UU_otq12MLlspCliJgL2u02A&key=AIzaSyCvJq54RhMj_CvM1xzTU815qgy3_JHHeX8`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UUmGyCEbHfY91NFwHgioNLMQ&key=AIzaSyCvJq54RhMj_CvM1xzTU815qgy3_JHHeX8`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UUy1Rr-GkiL8vlPApKsw6SuA&key=AIzaSyCvJq54RhMj_CvM1xzTU815qgy3_JHHeX8`,
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=16&playlistId=UU_VFGL2488ElJvThosFxaRQ&key=AIzaSyCvJq54RhMj_CvM1xzTU815qgy3_JHHeX8`
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jomezVideos: [],
      spinVideos: [],
      centralVideos: [],
      dggVideos: [],
      //add dg tutorials, aces
      history: JSON.parse(localStorage.getItem('history')) || [],
      favorites: JSON.parse(localStorage.getItem('favorites')) || [],
      watchList: JSON.parse(localStorage.getItem('watchList')) || []
    }
  }

  static propTypes = {
    jomezVideos: PropTypes.array,
    spinVideos: PropTypes.array,
    centralVideos: PropTypes.array,
    dggVideos: PropTypes.array,
    favorites: PropTypes.array,
    watchList: PropTypes.array,
    history: PropTypes.array
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

  getYoutubeThumbnail = (link) => {
    if ('maxres' in link) {
      return link.maxres.url;
    } else if ('standard' in link) {
      return link.standard.url;
    } else if ('high' in link) {
      return link.high.url;
    } else if ('medium' in link) {
      return link.medium.url;
    } else {
      return link.default.url;
    }
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
              history={this.state.history}
              getYoutubeThumbnail={this.getYoutubeThumbnail}
            /> } 
           />
           <Route path='/watchlist' component={ () => 
            <WatchList
              watchList={this.state.watchList}
              getYoutubeThumbnail={this.getYoutubeThumbnail}              
            /> } 
           />
           <Route path='/favorites' component={ () => 
            <Favorites 
              favorites={this.state.favorites}
              getYoutubeThumbnail={this.getYoutubeThumbnail}              
            /> } 
           />
        </div>
      </Router>
    );
  }
}