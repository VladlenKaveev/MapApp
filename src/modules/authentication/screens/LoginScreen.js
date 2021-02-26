import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
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
import firebase from "../../firebase";

const { width } = Dimensions.get("window");

export default class LoginScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Header style={styles.header} />
        <Card transparent style={{ alignItems: "center" }}>
          <CardItem>
            <Label
              style={{
                fontSize: 30,
                color: "#252D76",
                fontWeight: "bold",
                fontStyle: "normal",
                padding: width / 20,
              }}
            >
              Вход
            </Label>
            <Label
              style={{
                flex: 1,
                fontSize: 16,
                padding: width / 20,
                color: "#AEAEAE",
                textAlign: "right",
              }}
            >
              Регистрация
            </Label>
          </CardItem>
          <CardItem>
            <Input
              placeholder="Email"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </CardItem>
          <CardItem>
            <Input
              placeholder="Пароль"
              autoCorrect={false}
              autoCapitalize="none"
            />
          </CardItem>
          <CardItem>
            <Label style={{ color: "#929292", textAlign: "center", flex: 1 }}>
              Еще не зарегистрированы?
            </Label>
          </CardItem>
          <CardItem>
            <Label
              onPress={() => {
                navigation.navigate("CreateUserScreen");
              }}
              style={{ textAlign: "center", flex: 1, color: "#3066E0" }}
            >
              Зарегистроваться
            </Label>
          </CardItem>
          <CardItem>
            {/*<Left />*/}
            <Button style={styles.button}>
              <Label style={styles.button_label}>Войти</Label>
            </Button>
          </CardItem>
        </Card>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3066E0",
  },
  button: {
    backgroundColor: "#3066E0",
    borderRadius: 20,
    width: width / 2,
    justifyContent: "center",
    alignSelf: "center",
  },
  button_label: {
    color: "#FFFFFF",
  },
});
