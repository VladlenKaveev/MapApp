import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import {
  Container,
  Card,
  CardItem,
  Label,
  Button,
  Input,
  Text,
} from "native-base";
import { signUp } from "../store";
import { useDispatch } from "react-redux";
import MainHeader from "../../header/MainHeader";
import { Formik } from "formik";
import { signUpValidationSchema } from "../validation/validationSchema";
import Icon from "react-native-vector-icons/FontAwesome";
import ImagePicker from "../components/ImagePicker";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window").height;

const onSubmit = (email, password, dispatch) => {
  dispatch(signUp({ email, password }));
};

export default function CreateUserScreen() {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);
  const icon = !visible ? "eye-slash" : "eye";

  return (
    <Container style={styles.container}>
      <MainHeader />
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
        <ImagePicker />
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({ handleChange, handleBlur, values, errors, isValid }) => (
            <>
              <CardItem style={{ justifyContent: "flex-start" }}>
                <Input
                  textAlign="left"
                  placeholder="Email"
                  autoCorrect={false}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  style={styles.input}
                />
              </CardItem>
              {errors.email && <Text style={styles.error}>{errors.email}</Text>}
              <CardItem>
                <Input
                  name="password"
                  placeholder="Пароль"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={!visible}
                  autoCorrect={false}
                  style={styles.input}
                />
                <Icon
                  name={icon}
                  size={18}
                  color={"#3066E0"}
                  onPress={() => setVisibility(!visible)}
                  style={[styles.icons, { height: height, width: height }]}
                />
              </CardItem>
              {errors.password && (
                <Text style={styles.error}>{errors.password}</Text>
              )}
              <CardItem>
                <Input
                  name="confirmPassword"
                  placeholder="Подтвердите пароль"
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={!visible}
                  style={styles.input}
                />
                <Icon
                  name={icon}
                  size={18}
                  color={"#3066E0"}
                  onPress={() => setVisibility(!visible)}
                  style={[styles.icons, { height: height, width: height }]}
                />
              </CardItem>
              {errors.confirmPassword && (
                <Text style={styles.error}>{errors.confirmPassword}</Text>
              )}
              <CardItem>
                <Button
                  style={styles.button}
                  disabled={!isValid}
                  onPress={() => {
                    console.log(values.email, values.password);
                    onSubmit(values.email, values.password, dispatch);
                  }}
                >
                  <Label style={styles.button_label}>Зарегистироваться</Label>
                </Button>
              </CardItem>
            </>
          )}
        </Formik>
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
  input: {
    color: "#252D76",
  },
  error: {
    fontSize: 12,
    color: "red",
    alignSelf: "flex-start",
    paddingLeft: "5%",
  },
});
