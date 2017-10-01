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

  static propTypes = {
    jomezVideos: PropTypes.array,
    spinVideos: PropTypes.array,
    centralVideos: PropTypes.array,
    dggVideos: PropTypes.array,
    favorites: PropTypes.array,
    watchList: PropTypes.array,
    history: PropTypes.array
  }

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

  componentDidMount() {
    let promises = urls.map(url => fetch(url).then(response => response.json()));
    Promise.all(promises).then(results => {
      this.setState({
        spinVideos: results[0].items,
        jomezVideos: results[1].items,
        centralVideos: results[2].items,
        dggVideos: results[3].items
      });
      console.log(this.state.centralVideos)
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
              history={this.state.history}
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