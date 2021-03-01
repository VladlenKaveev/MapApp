import React from "react";
import { StyleSheet } from "react-native";
import { Label, Header } from "native-base";

function MainHeader() {
  return (
    <Header transparent style={styles.header}>
      <Label style={styles.logo_l}>L</Label>
      <Label style={styles.logo_f}>F</Label>
      <Label style={styles.label}>
        потерял<Label style={styles.label_second}>{"\n"}нашел</Label>
      </Label>
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#3066E0",
    margin: "5%",
  },
  logo_l: {
    color: "#F7D352",
    fontSize: 50,
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
  },
  logo_f: {
    fontSize: 50,
    color: "#FFFFFF",
    fontFamily: "Montserrat-Bold",
  },
  label: {
    marginTop: 10,
    marginLeft: 10,
    color: "#F7D352",
    fontFamily: "Montserrat-Regular",
  },
  label_second: {
    color: "#FFFFFF",
  },
});

export default MainHeader;
