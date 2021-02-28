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
  Input,
  Left,
} from "native-base";
import { signOut } from "../../authentication/actions/loginAction";
import Map from "../../map/components/Map";
import MainHeader from "../../header/MainHeader";

const { width } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  return (
    <Container style={styles.container}>
      <MainHeader />
      <Card transparent style={styles.card}>
        <CardItem style={styles.carditem}>
          <Label style={styles.label}>Будем знакомы ;)</Label>
        </CardItem>
        <CardItem style={styles.carditem}>
          <Label style={styles.label_map}>Вы здесь</Label>
        </CardItem>
      </Card>
      <Map />
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
