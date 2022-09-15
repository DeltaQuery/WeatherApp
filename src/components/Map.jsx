import { GoogleMap, Marker } from '@react-google-maps/api'
import React from 'react'

export const Map = ({ className, coords = { lat: 0, lng: 0} }) => {

  return (
    <GoogleMap
      mapContainerClassName={className}
      center={coords}
      zoom={12}
    >
      <Marker position={coords} />
    </GoogleMap>
  )
}