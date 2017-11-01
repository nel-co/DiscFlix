import React from 'react';
import '../css/App.css';

export default class VideoModal extends React.Component {

  handleVideoClose = (e) => {
    this.props.handleVideoModal();
    e.currentTarget.parentNode.removeChild(document.querySelector('.VideoModal-youtube'));
  }

  render() {
    return (
      <div className="VideoModal-container">
        <div className="VideoModal-close" onTouchStart={(e) => this.handleVideoClose(e)} onClick={(e) => this.handleVideoClose(e)}><i className="fa fa-times" aria-hidden="true" style={IconStyle}></i></div>
        <div className="VideoModal-youtube">
          <iframe
            src={`https://www.youtube.com/embed/${this.props.history[this.props.history.length - 1].snippet.resourceId.videoId}?rel=0&autoplay=1&autohide=1&showinfo=0`}
            title="youtube-video"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

const IconStyle = {
  fontSize: 24
}