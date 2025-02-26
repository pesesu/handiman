import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "280px",
  borderRadius: "8px",
};

const center = {
  lat: 6.5244, // Lagos, Nigeria
  lng: 3.3792,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAoeQteH_-HtFTD4ogYJKi9hMwpIQ0KlyA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
