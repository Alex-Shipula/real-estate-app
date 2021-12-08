import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MapGoogleProps } from './MapGoogle.props';

const containerStyle = {
    width: '620px',
    height: '600px'
};

 export const MapGoogle = ({...props}:MapGoogleProps): JSX.Element  => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: ""
    });

    const [map, setMap] = useState(null)
   
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])
 
    return isLoaded ? (   
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={props.center}
            zoom={props.center.zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <></>
        </GoogleMap>
    ) : <></>
};