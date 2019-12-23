import { GoogleApiWrapper} from 'google-maps-react';
import {InfoWindow, Marker } from 'google-maps-react';
import React from 'react';
import CurrentLocation from './Map';


class MapContainer extends React.Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });

    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };

    render() {
      return (
        <>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker onClick={this.onMarkerClick} name={'current location'} />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
      
        </>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyBzU85e0xLlYw9cBDdodmcgs9zDbLmywpE'
  })(MapContainer);
