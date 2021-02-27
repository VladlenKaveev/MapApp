import React, { Component, useState } from "react";
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
import { signUp } from "../../../core/root";
import { useDispatch } from "react-redux";

const { width } = Dimensions.get("window");

export default function CreateUserScreen({ initialState }) {
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const dispatch = useDispatch();
  return (
    <Container style={styles.container}>
      <Header style={styles.header} />
      <Card transparent style={{ alignItems: "center" }}>
        <CardItem>
          <Label
            style={{
              flex: 1,
              fontSize: 16,
              padding: width / 20,
              color: "#AEAEAE",
              textAlign: "left",
            }}
          >
            Вход
          </Label>
          <Label
            style={{
              fontSize: 30,
              color: "#252D76",
              fontWeight: "bold",
              fontStyle: "normal",
              padding: width / 20,
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
            onChangeText={(text) => {
              setEmail({ email: text });
            }}
          />
        </CardItem>
        <CardItem>
          <Input
            placeholder="Пароль"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => {
              setPassword({ password: text });
            }}
          />
        </CardItem>
        <CardItem>
          <Button
            style={styles.button}
            onPress={() => {
              dispatch(signUp({ email, password }));
            }}
          >
            <Label style={styles.button_label}>Зарегистироваться</Label>
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
