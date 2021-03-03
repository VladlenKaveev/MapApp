import { Alert } from "react-native";
import authService from "../domain/services/AuthService";

export const checkUser = (navigation) => {
  // firebase.auth().onAuthStateChanged((user) => {
  authService.checkUser((user) => {
    if (user) {
      console.log("Вход подтвержден!");
      navigation.navigate("HomeScreen");
    } else {
      console.log("Вы не вошли в аккаунт!");
      navigation.navigate("LoginScreen");
    }
  });
};

export const signInUser = (email, password) => {
  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password) пробую использовать сервис
  authService
    .signIn(email, password)
    .then(function () {
      console.log("Вы успешно вошли в аккаунт!");
    })
    .catch(function (error) {
      Alert.alert(error.message);
    });
};

export const signOut = () => {
  // firebase
  // .auth()
  // .signOut()
  authService
    .signOut()
    .then(function () {
      Alert.alert("Вы вышли из аккаунта!");
    })
    .catch(function (error) {
      Alert.alert(error);
    });
};

export const createUser = (email, password) => {
  // firebase
  //   .auth()
  //   .createUserWithEmailAndPassword(email, password)
  authService
    .signUp(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      Alert.alert(err);
    });
};
