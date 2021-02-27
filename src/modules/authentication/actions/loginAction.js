import firebase from "../../firebase/index";
import { Alert } from "react-native";
import * as yup from "yup";

// export const checkUser = () => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       console.log("Вход подтвержден!");
//       navigation.navigate("Home");
//     } else {
//       Alert.alert("Вы не вошли в аккаунт!");
//     }
//   });
// };  Откуда взять navigation?

export const signInUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function () {
      console.log("Вы успешно вошли в аккаунт!");
    })
    .catch(function (error) {
      console.log(error.message);
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
      console.log(err);
    });
};

export const signUpValidationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
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
