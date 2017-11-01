import React, { Component } from 'react';

export default class RecentVids extends Component {
  render() {
    let recentVids = this.props.history.slice(this.props.history.length - 4).reverse().map((video, index) => {
      return (
        <div className="Stat-recent-list" key={index}>
          <a href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank">
            <span>{video.snippet.title}</span>
            <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
          </a>

      </div>
      );
    });
    let noResults = () => {
      return (
        <div className="Stat-recent-list">
          <div className="Stat-recent-empty">Watched videos appear here</div>
        </div>
      );
    }
    return (
      <div className="Stat-recent">
        <h3 className="Stat-header">Recently Watched</h3>
        {this.props.history.length > 0 ? recentVids : noResults()}
      </div>
    )
  }
}
