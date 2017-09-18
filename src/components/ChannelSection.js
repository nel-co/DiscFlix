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

    showResults();

  }

  handleDefaultBookMark = (e, videoArray) => {

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

  render() {
    return (
      <div>
        <Header />
        <div style={MainContainer} className="main-container">
          <Jomez 
            jomezVideos={this.props.jomezVideos}
            favorites={this.props.favorites}
            watchList={this.props.watchList}
            handleDefaultFavorite={this.handleDefaultFavorite}
            handleDefaultBookMark={this.handleDefaultBookMark}
            handleDefaultLink={this.handleDefaultLink}
          />
          <Spin 
            spinVideos={this.props.spinVideos}
            favorites={this.props.favorites}
            watchList={this.props.watchList}
            handleDefaultFavorite={this.handleDefaultFavorite}
            handleDefaultBookMark={this.handleDefaultBookMark}
          />
          <DiscGuy 
            dggVideos={this.props.dggVideos}
            favorites={this.props.favorites}
            watchList={this.props.watchList}
            handleDefaultFavorite={this.handleDefaultFavorite}
            handleDefaultBookMark={this.handleDefaultBookMark}
         />
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