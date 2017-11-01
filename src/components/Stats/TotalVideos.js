import React, { Component } from 'react';

export default class TotalVideos extends Component {
  render() {
    return (
      <div className="Stat-box Stat-box--lg Stat-w">
        <span>Total Videos Watched</span>
        <span>{this.props.history.length}</span>
      </div>
    )
  }
}
