import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../../css/App.css';

import PH from './blank-img.jpg'; // Placeholder Image

import { globalStyles } from '../globalStyles.js';

export default class Tips extends React.Component {

  handleVideoClick = (e) => {
    e.stopPropagation();
    e.currentTarget.parentNode.parentNode.style.borderBottom = '3px solid #ffef00';
    this.props.handleDefaultHistory(e,this.props.dgTipVideos);
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
    let channelItems = this.props.dgTipVideos.map((item, index) => {
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
            <img src={PH} alt="placeholder for disc golf video" style={{visibility: 'hidden'}} />
            <div style={globalStyles.VideoOverlayStyle} className="VideoOverlay">
              <span className="icon-btn" onClick={(e) => this.handleVideoClick(e)}>
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              </span>
              <span className="icon-btn" onClick={(e) => this.props.handleDefaultBookMark(e,this.props.dgTipVideos)}><i className="fa fa-bookmark" aria-hidden="true"></i></span>
              <span className="icon-btn" onClick={(e) => this.props.handleDefaultFavorite(e,this.props.dgTipVideos)}><i className="fa fa-heart" aria-hidden="true"></i></span>
            </div>
        </div>
      )
    });
    return (
      <div style={globalStyles.marginTop} id="Aces">
        <div>
          <h2 style={globalStyles.ChannelTitle}>
            Disc Golf Tips
            <a href="https://www.youtube.com/playlist?list=PLwpmUfonsaeuayhOqjIARZ9Sdpi5yxEOa" target="_blank" rel="noopener noreferrer" style={globalStyles.ChannelLink}>
              <div style={globalStyles.SubscribeBtn}>Follow</div>
            </a>
          </h2>
        </div>
        <div className="video-grid">
        {this.props.dgTipVideos.length && <OwlCarousel ref="Tips" options={globalStyles.owlOptions}>
          {channelItems}
        </OwlCarousel>}
        </div>
      </div>
    );
  }
}