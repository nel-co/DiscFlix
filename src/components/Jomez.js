import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../css/App.css';

export default class Jomez extends React.Component {

  handleVideoClick = (e) => {
    e.stopPropagation();
    e.currentTarget.parentNode.parentNode.style.borderBottom = '3px solid #ffef00';
  }

  handleVideoHover = (e) => {
    e.stopPropagation();
    e.currentTarget.querySelector('.VideoOverlay').style.display = 'flex';
  }

  handleVideoLeave = (e) => {
    e.stopPropagation();
    e.currentTarget.querySelector('.VideoOverlay').style.display = 'none';
  }

  render() {
    let channelItems = this.props.jomezVideos.map((item, index) => {
      let bg = {
        background: `url(${item.snippet.thumbnails.standard.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 20,
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.19)',
        cursor: 'pointer',
        height: 200
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
            <div style={VideoOverlayStyle} className="VideoOverlay">
              <span onClick={this.handleVideoClick}>
                <a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank" rel="noopener"><i className="fa fa-link" aria-hidden="true"></i></a>
              </span>
              <span onClick={(e) => this.props.handleDefaultBookMark(e,this.props.jomezVideos)}><i className="fa fa-bookmark" aria-hidden="true"></i></span>
              <span onClick={(e) => this.props.handleDefaultFavorite(e,this.props.jomezVideos)}><i className="fa fa-heart" aria-hidden="true"></i></span>
            </div>
        </div>
      )
    });
    return (
      <div style={marginTop} id="Jomez">
        <div>
          <div style={ChannelTitle}>
            Jomez Productions
            <a href="https://www.youtube.com/subscription_center?add_user=JomezProductions" target="_blank" rel="noopener noreferrer" style={ChannelLink}>
              <div style={SubscribeBtn}>Subscribe</div>
            </a>
          </div>
        </div>
        <div className="video-grid">
        {this.props.jomezVideos.length && <OwlCarousel ref="jomez" options={owlOptions}>
          {channelItems}
        </OwlCarousel>}
        </div>
      </div>
    );
  }
}

const marginTop = {
  marginTop: 25,
  marginBottom: 25
}

const ChannelTitle = {
  display: 'flex',
  alignItems: 'center',
  fontSize: 19,
  letterSpacing: 1,
  marginBottom: 25
}

const ChannelLink = {
  color: '#ffef00',
  textDecoration: 'none',
  paddingLeft: 20,
  paddingRight: 20
}

const SubscribeBtn = {
  fontSize: 10,
  textTransform: 'uppercase',
  border: '1px solid #ffef00',
  borderRadius: 20,
  padding: '10px 25px 10px 25px'
}

const VideoOverlayStyle = {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  background: 'rgba(28, 30, 46, .8)',
  borderRadius: 20
}

const owlOptions = {
  items: 4,
  dots: false,
  lazyLoad: true,
  margin: 10,
  stagePadding: 0,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1440: {
      items: 3
    },
    1920: {
      items: 4
    }
  }
};