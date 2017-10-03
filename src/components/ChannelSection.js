import React from 'react';
import Header from './Header';
import Jomez from './Jomez';
import Spin from './Spin';
import Central from './Central';
import DiscGuy from './DiscGuy';
import Footer from './Footer';
import '../css/App.css';


export default class ChannelSection extends React.Component {

  componentDidMount() {

    let findVideoMatches = document.querySelectorAll('.owl-item');
    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.favorites.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.favorites[j].id) {
          findVideoMatches[i].childNodes[0].querySelector('.fa-heart').style.color = '#CC1441';
        }
      }
    }

    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.watchList.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.watchList[j].id) {
          findVideoMatches[i].childNodes[0].querySelector('.fa-bookmark').style.color = '#8BFF0D';
        }
      }
    }

    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.history.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.history[j].id) {
          findVideoMatches[i].childNodes[0].style.borderBottom = '3px solid #ffef00';
        }
      }
    }

    showResults();

  }

  handleDefaultBookMark = (e, videoArray) => {
    
    e.preventDefault();
    e.stopPropagation();

    // check if id is already in watchlist
    let btn = e.currentTarget;
    let id = btn.parentNode.parentNode.dataset.video;
    let exists;
    for (var i = 0; i < this.props.watchList.length; i++) {
      if (this.props.watchList[i].id === id) {
        exists = true;
      }
    }

    // if not in the watchList
    if (exists !== true) {
      btn.style.color = '#8BFF0D';
      btn.classList.add('growIcon');
      setTimeout(() => {
        btn.classList.remove('growIcon');
      }, 400);

      // push to watchList array
      this.setState({
        watchList: this.props.watchList.push(videoArray[btn.parentNode.parentNode.dataset.index])
      });

      // store watchList to local storage
      localStorage.setItem('watchList', JSON.stringify(this.props.watchList));
    }
  }

  handleDefaultFavorite = (e, videoArray) => {

    e.preventDefault();
    e.stopPropagation();

    // check if id is already in favorites
    let btn = e.currentTarget;
    let id = btn.parentNode.parentNode.dataset.video;
    let exists;
    for (var i = 0; i < this.props.favorites.length; i++) {
      if (this.props.favorites[i].id === id) {
        exists = true;
      }
    }

    // if not in the favorites
    if (exists !== true) {
      btn.style.color = '#CC1441';
      btn.classList.add('growIcon');
      setTimeout(() => {
        btn.classList.remove('growIcon');
      }, 400);

      // push to favorites array
      this.setState({
        favorites: this.props.favorites.push(videoArray[btn.parentNode.parentNode.dataset.index])
      });

      // store favorites to local storage
      localStorage.setItem('favorites', JSON.stringify(this.props.favorites));
    }
  }

  handleDefaultHistory = (e, videoArray) => {
    
    if (this.props.history.length === 0) {
      this.setState({
        history: this.props.history.push(videoArray[e.currentTarget.parentNode.parentNode.dataset.index])
      });
      // store history to local storage
      localStorage.setItem('history', JSON.stringify(this.props.history));
    } else {
      for (var i = 0; i < this.props.history.length; i++) {
        if (e.currentTarget.parentNode.parentNode.dataset.video !== this.props.history[i].id) {
          // push to history array
          this.setState({
            history: this.props.history.push(videoArray[e.currentTarget.parentNode.parentNode.dataset.index])
          });
          // store history to local storage
          localStorage.setItem('history', JSON.stringify(this.props.history));
        }
      }
    }
  }

  render() {
    const props = {
      jomezVideos: this.props.jomezVideos,
      spinVideos: this.props.spinVideos,
      centralVideos: this.props.centralVideos,
      dggVideos: this.props.dggVideos,
      favorites: this.props.favorites,
      watchlist: this.props.watchList,
      history: this.props.history,
      handleDefaultFavorite: this.handleDefaultFavorite,
      handleDefaultBookMark: this.handleDefaultBookMark,
      handleDefaultHistory: this.handleDefaultHistory
    };
    return (
      <div>
        <Header />
        <div style={MainContainer} className="main-container">
          <Jomez {...props} />
          <Spin {...props} />
          <Central {...props} />
          <DiscGuy {...props} />
        </div>
        <div className="loading-container">
          <div className="loading-circle"></div>
        </div>
        <Footer />
      </div>
    );
  }
}

const MainContainer = {
  margin: '0 auto',
  width: '80%',
  flexDirection: 'column'
}

function showResults() {
  let main = document.querySelector('.main-container');
  let load = document.querySelector('.loading-container');
  setTimeout(function() {
    load.style.display = 'none';
    main.style.display = 'flex';
  }, 1200);
}