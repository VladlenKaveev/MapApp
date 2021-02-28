import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Container, Card, CardItem, Label, Button, Input } from "native-base";
import { useDispatch } from "react-redux";
import { signIn } from "../../../core/root";
import firebase from "../../firebase";
import MainHeader from "../../header/MainHeader";

const { width } = Dimensions.get("window");

export default function LoginScreen({ initialState, navigation }) {
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("Вход подтвержден!");
        navigation.navigate("HomeScreen");
      } else {
        console.log("Вы не вошли в аккаунт!");
      }
    });
  }, []);

  return (
    <Container style={styles.container}>
      <MainHeader />
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
            onChangeText={(text) => setEmail({ email: text })}
          />
        </CardItem>
        <CardItem>
          <Input
            placeholder="Пароль"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setPassword({ password: text })}
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
          <Button
            style={styles.button}
            onPress={() => {
              dispatch(signIn({ email, password }));
            }}
          >
            <Label style={styles.button_label}>Войти</Label>
          </Button>
        </CardItem>
      </Card>
    </Container>
  );
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
