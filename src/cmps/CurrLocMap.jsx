
import GoogleMapReact from 'google-map-react';
import { Await } from 'react-router-dom';
// import { useEffect, useState} from "react"

const API_KEY = 'AIzaSyDeUPhJUrN1HRo9DhKdyikl0snGjEdigVQ'





export  function CurrLocMap({lat, long}){

    console.log("in map" ,lat, long)

    const defaultProps = {
        center: {
          lat: lat,
          lng: long
        },
        zoom: 11
      };
    if(!lat || !long) return
    return (
    // Important! Always set the container height explicitly
    <div style={{ height: '20vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
    </div>
    );
}

export function getLoc(){
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            (error) => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
}