import React from 'react';
import ListNav from './ListNav';
import '../css/App.css';


export default class WatchList extends React.Component {

	handleVideoClick = (e) => {
  	e.stopPropagation();
  	e.currentTarget.parentNode.parentNode.parentNode.parentNode.style.borderBottom = '3px solid #ffef00';
	}

	handleVideoHover = (e) => {
  	e.stopPropagation();
  	e.currentTarget.querySelector('.VideoOverlay').style.display = 'flex';
	}

	handleVideoLeave = (e) => {
  	e.stopPropagation();
  	e.currentTarget.querySelector('.VideoOverlay').style.display = 'none';
	}

	removeVideo = (e) => {
		e.stopPropagation();
		let btn = e.currentTarget;
		let id = btn.parentNode.parentNode.parentNode.parentNode.dataset.video;
		for(var i = 0; i < this.props.watchList.length; i++) {
			if(this.props.watchList[i].id === id) {
				this.setState({
					watchList: this.props.watchList.splice(i, 1)
				});
				localStorage.setItem('watchList', JSON.stringify(this.props.watchList));
			}
		}
	}

  render() {
  	let watchItems = this.props.watchList.map( (item, index) => {
  		let bg = {
  			background: `url(${item.snippet.thumbnails.standard.url})`,
  			backgroundSize: 'cover',
  			backgroundPosition: 'center center',
  			borderRadius: 20,
  			cursor: 'pointer',
  		}
  		return (
  			<div 
  				style={bg} 
  				className="VideoList" 
  				key={item.id} 
  				data-index={index} 
  				data-video={item.id} 
  				onMouseOver={this.handleVideoHover} 
  				onMouseLeave={this.handleVideoLeave}>
	  				<div style={VideoOverlayStyle} className="VideoOverlay">
	  					<div style={overlayContent}>
	  						<span style={videoTitle}>{item.snippet.title}</span>
	  						<div style={videoIcons}>
			  					<span onClick={this.handleVideoClick}>
			  						<a href={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`} target="_blank"><i className="fa fa-link" aria-hidden="true"></i></a>
			  					</span>
			  					<span onClick={this.removeVideo}><i className="fa fa-times" aria-hidden="true"></i></span>
			  					</div>
	  					</div>
	  				</div>
  			</div>
  		)
  	});
    return (
      <div>
      	<ListNav />
      	<div style={Container} className="ScreenAnimate">
      		<h1 style={HeadlineStyle}>Watch List</h1>
      		<div style={videoContainer} className="videoContainer">
      			{this.props.watchList.length !== 0 ? watchItems : 'Nothing here. Add videos to your watch list to see them here.'}
      		</div>
      	</div>
      </div>
    )
  }
}

const Container = {
	margin: '0 auto',
	width: '90%',
}

const HeadlineStyle = {
	marginTop: 50,
	fontSize: '1.5em'
}

const videoContainer = {
	display: 'flex',
	flexWrap: 'wrap',
}

const VideoOverlayStyle = {
	display: 'none',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100%',
	background: 'rgba(28, 30, 46, .8)',
	borderRadius: 20
}

const overlayContent = {
	display: 'flex',
	flexDirection: 'column'
}

const videoTitle = {
	fontSize: 12,
	padding: '15px 30px 15px 30px',
	textAlign: 'center'
}

const videoIcons = {
	display: 'flex',
	justifyContent: 'center'
}