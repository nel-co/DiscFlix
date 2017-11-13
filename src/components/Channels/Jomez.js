import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../../css/App.css';

import PH from './blank-img.jpg'; // Placeholder Image

import { globalStyles } from '../globalStyles.js';

export default class Jomez extends React.Component {

  handleVideoClick = (e) => {
    e.stopPropagation();
    e.currentTarget.parentNode.parentNode.style.borderBottom = '3px solid #ffef00';
    this.props.handleDefaultHistory(e,this.props.jomezVideos);
  }

  handleVideoHover = (e) => {
    e.preventDefault();    
    e.stopPropagation();
    e.currentTarget.querySelector('.VideoOverlay').style.display = 'flex';
  }

  handleVideoLeave = (e) => {
    e.preventDefault();    
    e.stopPropagation();
    e.currentTarget.querySelector('.VideoOverlay').style.display = 'none';
  }

  render() {
    let channelItems = this.props.jomezVideos.map((item, index) => {
      let videoImage = this.props.getYoutubeThumbnail(item.snippet.thumbnails);
      return (
        <div 
          style={globalStyles.ThumbnailBackground} 
          className="Videos owl-lazy" 
          key={item.id}
          data-src={videoImage}
          data-index={index} 
          data-video={item.id}
          onMouseOver={this.handleVideoHover} 
          onMouseLeave={this.handleVideoLeave}>
            <img src={PH} alt="placeholder for disc golf video" style={{visibility: 'hidden'}} />
            <div style={globalStyles.VideoOverlayStyle} className="VideoOverlay">
              <span className="icon-btn" onClick={(e) => this.handleVideoClick(e)}>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </span>
              <span className="icon-btn" onClick={(e) => this.props.handleDefaultBookMark(e,this.props.jomezVideos)}><i className="fa fa-bookmark" aria-hidden="true"></i></span>
              <span className="icon-btn" onClick={(e) => this.props.handleDefaultFavorite(e,this.props.jomezVideos)}><i className="fa fa-heart" aria-hidden="true"></i></span>
            </div>
        </div>
      )
    });
    return (
      <div style={globalStyles.marginTop} id="Jomez">
        <div>
          <h2 style={globalStyles.ChannelTitle}>
            Jomez Productions
            <a href="https://www.youtube.com/subscription_center?add_user=JomezProductions" target="_blank" rel="noopener noreferrer" style={globalStyles.ChannelLink}>
              <div style={globalStyles.SubscribeBtn}>Follow</div>
            </a>
          </h2>
        </div>
        <div className="video-grid">
        {this.props.jomezVideos.length && <OwlCarousel ref="jomez" options={globalStyles.owlOptions}>
          {channelItems}
        </OwlCarousel>}
        </div>
      </div>
    );
  }
}