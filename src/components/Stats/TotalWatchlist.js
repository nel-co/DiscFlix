import React, { Component } from 'react';

export default class TotalWatchlist extends Component {
  render() {
    return (
      <div className="Stat-box Stat-box--lg Stat-w">
        <span>Videos in WatchList</span>
        <span>{this.props.watchList.length}</span>
      </div>
    )
  }
}
