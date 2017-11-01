import React from 'react';
import Header from '../Header';
import Jomez from './Jomez';
import Spin from './Spin';
import Central from './Central';
import DiscGuy from './DiscGuy';
import Footer from '../Footer';
import VideoModal from '../VideoModal';

import '../../css/App.css';

export default class ChannelSection extends React.Component {

  componentDidMount() {

    const findVideoMatches = document.querySelectorAll('.owl-item');

    // style favorites
    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.favorites.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.favorites[j].id) {
          findVideoMatches[i].childNodes[0].querySelector('.fa-heart').style.color = '#CC1441';
        }
      }
    }

    // style watchlist
    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.watchList.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.watchList[j].id) {
          findVideoMatches[i].childNodes[0].querySelector('.fa-bookmark').style.color = '#8BFF0D';
        }
      }
    }

    // style history
    for (let i = 0; i < findVideoMatches.length; i++) {
      for (let j = 0; j < this.props.history.length; j++) {
        if (findVideoMatches[i].childNodes[0].dataset.video === this.props.history[j].id) {
          findVideoMatches[i].childNodes[0].style.borderBottom = '3px solid #ffef00';
        }
      }
    }
  }

  handleDefaultBookMark = (e, videoArray) => {
    
    e.preventDefault();

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
    
    this.setState({
      history: this.props.history.push(videoArray[e.currentTarget.parentNode.parentNode.dataset.index])
    });
    // store history to local storage
    localStorage.setItem('history', JSON.stringify(this.props.history));

    // Set video modal to true/false
    this.props.handleVideoModal();
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
      handleDefaultHistory: this.handleDefaultHistory,
      getYoutubeThumbnail: this.props.getYoutubeThumbnail
    };

    const isVideoOpen = this.props.isVideoOpen;
    let modal;
    let mainContainer;
    if (isVideoOpen) {
      modal = <VideoModal history={this.props.history} handleVideoModal={this.props.handleVideoModal} />;
      mainContainer = null;
    } else {
      modal = null;
      mainContainer = (
        <div>
        <Header />
        <div className="content">
          <div style={MainContainer} className="main-container">
            <Jomez {...props} />
            <Spin {...props} />
            <Central {...props} />
            <DiscGuy {...props} />
          </div>
        </div>
        <div className="loading-container">
          <div className="loading-circle"></div>
        </div>
        <Footer />
        </div>
      );
    }
    setTimeout(function () {
      showResults();
    }, 1200);
    return (
      <div>
        {modal}
        {mainContainer}
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
  if (!document.querySelector('.VideoModal-container') && document.querySelector('.content')) {
    document.querySelector('.content').style.display = 'flex';
    document.querySelector('.loading-container').style.display = 'none';
  }
};