import React, { Component } from 'react';

export default class MostWatched extends Component {
  render() {
    const getMostWatched = (videosWatched) => {
      let result;
      let tmp = 0;
      for (let i = 0; i < videosWatched.length; i++) {
        let count = 0;
        for (let j = 0; j < videosWatched.length; j++) {
          if (videosWatched[i].snippet.channelTitle === videosWatched[j].snippet.channelTitle) {
            count++;
          }
        }
        if (count > tmp) {
          tmp = count;
          result = videosWatched[i].snippet.channelTitle;
        }
      }
      return result;
    }
    return (
      <div className="Stat-box Stat-box--sm">
        <span>Most Watched Channel</span>
        <span>{(this.props.history.length > 0) ? getMostWatched(this.props.history) : 'No History'}</span>
      </div>
    )
  }
}
