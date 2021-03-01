import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { checkUser } from "../actions/loginAction";
import { Container } from "native-base";

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    checkUser(navigation);
  }, []);
  return (
    <Container style={{ flex: 1, justifyContent: "center" }}>
      <ActivityIndicator size="large" color="#3168DE" />
    </Container>
  );
}
