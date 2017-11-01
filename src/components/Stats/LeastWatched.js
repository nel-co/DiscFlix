import React, { Component } from 'react';

export default class LeastWatched extends Component {
  render() {
    const getLeastWatched = (videosWatched) => {
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
        } else if (count < tmp) {
          result = videosWatched[i].snippet.channelTitle;          
        }
      }
      return result;
    }
    return (
      <div className="Stat-box Stat-box--sm">
        <span>Least Watched Channel</span>
        <span>{(this.props.history.length > 0) ? getLeastWatched(this.props.history) : 'No History'}</span>
      </div>
    )
  }
}
