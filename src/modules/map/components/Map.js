import React, { useEffect, useState, useCallback, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import { requestPermissions } from "../actions/mapActions";
import { Platform, StyleSheet } from "react-native";

function Map() {
  const [isMapReady, setMapReady] = useState(false);
  const mapRef = useRef(null);
  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  const handleMapReady = useCallback(() => {
    setMapReady(true);
  }, [mapRef, setMapReady]);

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      (pos) => {
        setError("");
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => {
        setError(e.message);
        console.log(error);
      },
      {
        timeout: 20000,
        maximumAge: 1000,
        enableHighAccuracy: true,
        distanceFilter: 100,
        interval: 5000,
        fastestInterval: 2000,
        fitToElements: true,
      }
    );
    if (Platform.OS === "ios") {
      handleMapReady();
    }
  }, []);

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0.1,
        longitudeDelta: 0.2,
      }}
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
      loadingEnabled={true}
      toolbarEnabled={true}
      // zoomEnabled={true}
      // rotateEnabled={true}
      showsCompass={true}
      onMapReady={handleMapReady}
      style={isMapReady ? styles.map : {}}
    />
  );
}

const styles = StyleSheet.create({
  map: {
    height: "50%",
    width: "100%",
  },
});

export default Map;
