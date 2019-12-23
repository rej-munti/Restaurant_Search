import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'absolute',
    display:'flex',
    width: '600px',
    height: '60%'
  }
};

export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);
    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
      lat: lat,
      lng: lng
    }
  };
  }

componentDidUpdate(prevProps, prevState) {
  if (prevProps.google !== this.props.google) {
    this.loadMap();
  }
  if (prevState.currentLocation !== this.state.currentLocation) {
    this.recenterMap();
  }
  }

recenterMap() {
  const map = this.map;
  const current = this.state.currentLocation;
  const google = this.props.google;
  const maps = google.maps;
  const mapRef = this.refs.map;
  const node = ReactDOM.findDOMNode(mapRef);
  let center = new maps.LatLng(current.lat, current.lng);
  let { zoom } = this.props;
  const mapConfig = Object.assign(
    {},
    {
      center: center,
      zoom: zoom
    }
    );

  if (map) {
    map.panTo(center);
    this.map = new maps.Map(node, mapConfig);
    this.map = new maps.places.PlacesService(this.map);
    this.Add_res(this.map,current);
  }
  }

componentDidMount() {
  if (this.props.centerAroundCurrentLocation) {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
      const coords = pos.coords;
      this.setState({
      currentLocation: {
      lat: coords.latitude,
      lng: coords.longitude
      }
      });
      });
  }
  }
  this.loadMap();
}

loadMap() {
  if (this.props && this.props.google) {
  // checks if google is available
    const { google } = this.props;
    const maps = google.maps;
    const mapRef = this.refs.map;
    // reference to the actual DOM element
    const node = ReactDOM.findDOMNode(mapRef);
    let { zoom } = this.props;
    const { lat, lng } = this.state.currentLocation;
    const center = new maps.LatLng(lat, lng);
    const mapConfig = Object.assign(
    {},
    {
      center: center,
      zoom: zoom
    }
    );
    // maps.Map() is constructor that instantiates the map
    this.map = new maps.Map(node, mapConfig);
}
}

Add_res(x,current) {
  console.log(current);
  let i=0;
  let restaurantList = document.getElementById('restaurant_baner');
  let openButton = document.getElementById('OpenIngoogle');
  let li = document.createElement('li');
  let suggestionBottun =document.getElementById('another_sug');
  function url(lat,lng,restaurant) {
    return window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${restaurant.place_id}`);
  }
  x.nearbySearch( {location:current, radius:10000, type: ['restaurant']},
  function(results, status, pagination){
    if (status !== 'OK') return;
    let restaurant = results;
    li.textContent = `${restaurant[i].name}`;
    restaurantList.appendChild(li);
    openButton.onclick = function() {
      let lat =restaurant[i].geometry.location.lat();
      let lng =restaurant[i].geometry.location.lng();
          url(lat,lng,restaurant[i]);
    }
    suggestionBottun.onclick = function() {
      if( i < results.length )
      {
        restaurant = results[i];
        li.textContent = `${restaurant.name}`;
        restaurantList.appendChild(li);
        openButton.onclick = function() {
        let lat =restaurant.geometry.location.lat();
        let lng =restaurant.geometry.location.lng();
        url(lat,lng,restaurant);
      }
        i++;
      }
      else
        {i=0;}
    };
    });
}

renderChildren() {
  const { children } = this.props;

  if (!children) return;
  return React.Children.map(children, c => {
    if (!c) return;
    return React.cloneElement(c, {
    map: this.map,
    google: this.props.google,
    mapCenter: this.state.currentLocation
    });
  });
}
render() {
const style = Object.assign({}, mapStyles.map);
return (
  <div>
  <div style={style} ref="map">
  Loading map...
  </div>
  {this.renderChildren()}
  </div>
);
}
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
zoom: 14,
initialCenter: {
lat: 24.774265,
lng: 46.738586
},
centerAroundCurrentLocation: true,
visible: true
};
