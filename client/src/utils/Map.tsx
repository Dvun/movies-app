import React, {FC, useState} from 'react';
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, TileLayer, useMapEvent} from 'react-leaflet'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import {ICoordinate} from '../interfaces/interfaces';
import {useFormContext} from 'react-hook-form';

interface mapProps {
  height?: string
  latitude: number
  longitude: number
  name: string
}

const Map: FC<mapProps> = (props: mapProps) => {
  const [coordinates, setCoordinates] = useState<ICoordinate[]>([{lat: props.latitude, lng: props.longitude}])
  const {setValue, formState: {errors}} = useFormContext()

  L.Marker.prototype.options.icon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
  })
  
  if (coordinates[0]?.lat && coordinates[0]?.lng) {
    setValue('latitude', coordinates[0].lat)
    setValue('longitude', coordinates[0].lng)
  }
  
  return (
    <>
      <MapContainer center={[60.1733244, 24.9410248]} zoom={14} style={{height: props.height}}>
        <TileLayer attribution='React Movies' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <MapClick
          setCoordinates={(coordinates) => {
            setCoordinates([coordinates])
          }}/>
        {
          coordinates.map((coordinate, index) => <Marker key={index} position={[coordinate.lat, coordinate.lng]}/>)
        }
      </MapContainer>
      {errors && <span style={{color: '#dc3545', fontSize: '13px'}}>{errors.latitude?.message}</span>}
    </>
  );
};

export default Map;


interface MapClickProps {
  setCoordinates: (coordinates: ICoordinate) => void
}

const MapClick: FC<MapClickProps> = ({setCoordinates}) => {
    useMapEvent('click', eventArgs => {
      setCoordinates({lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng})
    })
  return null
}