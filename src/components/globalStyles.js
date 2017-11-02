export const globalStyles = {
  owlOptions: {
    items: 4,
    dots: false,
    lazyLoad: true,
    margin: 10,
    stagePadding: 30,
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
  },
  marginTop: {
    marginTop: 25,
    marginBottom: 25
  },
  ChannelTitle: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,    
    fontSize: 19,
    letterSpacing: 1,
    marginBottom: 25
  },
  ChannelLink: {
    color: '#ffef00',
    textDecoration: 'none',
    paddingLeft: 20,
    paddingRight: 20
  },
  SubscribeBtn: {
    fontSize: 10,
    fontWeight: 400,
    textTransform: 'uppercase',
    border: '1px solid #ffef00',
    borderRadius: 20,
    padding: '10px 25px 10px 25px'
  },
  VideoOverlayStyle: {
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    background: 'rgba(28, 30, 46, .8)',
    borderRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0
  }
};