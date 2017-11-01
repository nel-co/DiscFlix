import React from 'react';
import ListNav from '../Nav/ListNav';
import Footer from '../Footer';
import Rank from './Rank';
import RecentVids from './RecentVids';
import MostWatched from './MostWatched';
import LeastWatched from './LeastWatched';
import TotalVideos from './TotalVideos';
import TotalFav from './TotalFav';
import TotalWatchlist from './TotalWatchlist';
import '../../css/App.css';

export default class Stats extends React.Component {

  render() {
    return (
      <div style={mainContainer} >
      	<ListNav />
      	<div style={Container} className="ScreenAnimate">
      		<h1 style={HeadlineStyle}>Video Stats</h1>
      		<div className="Stat-container">
            <div className="Stat-top-row">
              <div className="Stat-solo">
                <Rank history={this.props.history} />
                <MostWatched history={this.props.history} />
                <LeastWatched history={this.props.history} />
              </div>
              <RecentVids history={this.props.history} />
            </div>
            <div className="Stat-videos">
              <TotalVideos history={this.props.history} />
              <TotalFav favorites={this.props.favorites} />
              <TotalWatchlist watchList={this.props.watchList} />
            </div>
      		</div>
      	</div>
        <Footer />
      </div>
    )
  }
}

const mainContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const Container = {
  width: '90%',
}

const HeadlineStyle = {
  marginTop: 30,
  fontSize: '1.5em',
}