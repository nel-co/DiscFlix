import React, { Component } from 'react';

export default class Rank extends Component {
  render() {
    const getRank = (videosWatched) => {
      if (videosWatched >= 0 && videosWatched <= 10) {
        return 'Novice';        
      } else if (videosWatched > 10 && videosWatched <= 20) {
        return 'Recreational';        
      } else if (videosWatched > 20 && videosWatched <= 30) {
        return 'Intermediate';        
      } else if (videosWatched > 30 && videosWatched <= 50) {
        return 'Advanced';        
      } else if (videosWatched > 50 && videosWatched <= 65) {
        return 'Pro';        
      } else if (videosWatched > 65 && videosWatched <= 85) {
        return 'Master';        
      } else if (videosWatched > 85 && videosWatched <= 100) {
        return 'Grandmaster';        
      } else if (videosWatched > 100) {
        return 'Legend';        
      } else {
        return 'Watcher';
      }
    }
    return (
      <div className="Stat-box Stat-box--sm">
        <span>Discflix Rank</span>
        <span>{getRank(this.props.history.length)}</span>
      </div>
    )
  }
}
