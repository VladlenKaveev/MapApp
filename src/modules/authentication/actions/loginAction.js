import firebase from "../../firebase/index";
import { Alert } from "react-native";
import * as yup from "yup";

export const checkUser = (navigation) => {
  firebase.auth().onAuthStateChanged((user) => {
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
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      console.log("Вы успешно вошли в аккаунт!");
    })
    .catch(function (error) {
      Alert.alert(error.message);
    });
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      Alert.alert("Вы вышли из аккаунта!");
    })
    .catch(function (error) {
      Alert.alert(error);
    });
};

export const createUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      Alert.alert(err);
    });
};

export const signUpValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});

export const signInValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
