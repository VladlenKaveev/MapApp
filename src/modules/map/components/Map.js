import React, { useEffect, useState } from "react";
import { Dimensions, Text, View } from "react-native";
import MapView from "react-native-maps";
import Geolocation from "@react-native-community/geolocation";

const { width } = Dimensions.get("window");

function Map() {
  const [error, setError] = useState("");
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError("");
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => setError(e.message)
    );
    console.log(position.latitude, position.longitude);
  }, []);
  return (
    <MapView
      style={{
        height: "50%",
        width: "100%",
      }}
      initialRegion={{
        latitude: position.latitude,
        longitude: position.longitude,
        latitudeDelta: 0,
        longitudeDelta: 0,
      }}
      showsUserLocation={true}
      userLocationAnnotationTitle="Я тут"
      followsUserLocation={true}
      showsMyLocationButton={true}
    />
  );
}

export default Map;
