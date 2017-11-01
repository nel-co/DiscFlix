import React, { Component } from 'react';

export default class TotalFav extends Component {
  render() {
    return (
      <div className="Stat-box Stat-box--lg Stat-w">
        <span>Videos in Favorites</span>
        <span>{this.props.favorites.length}</span>
      </div>
    )
  }
}
