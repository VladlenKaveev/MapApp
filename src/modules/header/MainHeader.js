import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
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
  Header,
} from "native-base";

function MainHeader() {
  return (
    <Header transparent style={styles.header}>
      <Label style={styles.logo_l}>L</Label>
      <Label style={styles.logo_f}>F</Label>
      <Label style={styles.label}>
        потерял <Label style={styles.label_second}>{"\n"}нашел</Label>
      </Label>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3066E0",
  },
  logo_l: {
    color: "#F7D352",
    fontSize: 50,
    // fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
  },
  logo_f: {
    fontSize: 50,
    color: "#FFFFFF",
  },
  label: {
    color: "#F7D352",
  },
  label_second: {
    color: "#FFFFFF",
  },
});

export default MainHeader;
