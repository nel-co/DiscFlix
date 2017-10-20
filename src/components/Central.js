import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../css/App.css';

import PH from '../blank-img.jpg'; // Placeholder Image

import { globalStyles } from './globalStyles.js';


export default class Central extends React.Component {
  
  handleVideoClick = (e) => {
    e.stopPropagation();
    e.currentTarget.parentNode.parentNode.style.borderBottom = '3px solid #ffef00';
    this.props.handleDefaultHistory(e,this.props.centralVideos);    
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
    let channelItems = this.props.centralVideos.map((item, index) => {
      let videoImage = this.props.getYoutubeThumbnail(item.snippet.thumbnails);   
      let bg = {
        background: `url(${videoImage})`,
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: 20,
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.19)',
        cursor: 'pointer'
      }
      return (
        <div 
          style={bg} 
          className="Videos" 
          key={item.id} 
          data-index={index} 
          data-video={item.id} 
          onMouseOver={this.handleVideoHover} 
          onMouseLeave={this.handleVideoLeave}>
            <img src={PH} alt="blank-image" style={{visibility: 'hidden'}} />
            <div style={globalStyles.VideoOverlayStyle} className="VideoOverlay">
              <span onClick={this.handleVideoClick}>
                <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank" rel="noopener"><i className="fa fa-link" aria-hidden="true"></i></a>
              </span>
              <span onClick={(e) => this.props.handleDefaultBookMark(e,this.props.centralVideos)}><i className="fa fa-bookmark" aria-hidden="true"></i></span>
              <span onClick={(e) => this.props.handleDefaultFavorite(e,this.props.centralVideos)}><i className="fa fa-heart" aria-hidden="true"></i></span>
            </div>
        </div>
      )
    });
    return (
      <div style={globalStyles.marginTop} id="Central">
        <div>
          <div style={globalStyles.ChannelTitle}>
            Central Coast Disc Golf
            <a href="https://www.youtube.com/subscription_center?add_user=CentralCoastDiscGolf" target="_blank" rel="noopener noreferrer" style={globalStyles.ChannelLink}>
              <div style={globalStyles.SubscribeBtn}>Subscribe</div>
            </a>
          </div>
        </div>
        <div className="video-grid">
        {this.props.centralVideos.length && <OwlCarousel ref="spin" options={globalStyles.owlOptions}>
          {channelItems}
        </OwlCarousel>}
        </div>
      </div>
    );
  }
}

