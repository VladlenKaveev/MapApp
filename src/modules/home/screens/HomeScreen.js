import React, { Component, useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Label,
  Button,
  Text,
  Header,
  Input,
  Left,
} from "native-base";
import { signOut } from "../../authentication/actions/loginAction";
import MapView, { Marker } from "react-native-maps";
// import Geolocation from "react-native-geolocation-service";

const { width } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  // const [location, setLocation] = useState();
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log(position);
  //       },
  //       (error) => {
  //         // See error code charts below.
  //         console.log(error.code, error.message);
  //       },
  //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  // },[])
  return (
    <Container style={styles.container}>
      <Header style={styles.header} transparent>
        <Label>LF</Label>
        <Label>потерял нашел</Label>
      </Header>
      <Card transparent style={styles.card}>
        <CardItem style={styles.carditem}>
          <Label style={styles.label}>Будем знакомы ;)</Label>
        </CardItem>
        <CardItem style={styles.carditem}>
          <Label style={styles.label_map}>Вы здесь</Label>
        </CardItem>
      </Card>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32,
          longitude: 22,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      />
      <Content>
        <Button
          style={styles.button}
          onPress={() => {
            signOut();
            navigation.navigate("LoginScreen");
          }}
        >
          <Label style={styles.button_label}>Понятно, я пойду</Label>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3066E0",
    flex: 1,
  },
  header: {
    backgroundColor: "#3066E0",
  },
  button: {
    marginTop: width / 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    width: width / 2,
    justifyContent: "center",
    alignSelf: "center",
  },
  button_label: {
    color: "#3066E0",
  },
  card: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  carditem: {
    backgroundColor: "#3066E0",
  },
  map: {
    height: "50%",
    width: "100%",
  },
  label: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  label_map: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

export default HomeScreen;
