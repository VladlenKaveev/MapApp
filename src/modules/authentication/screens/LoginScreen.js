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
import { useDispatch } from "react-redux";
import { signIn } from "../store";
import MainHeader from "../../header/MainHeader";
import { Formik } from "formik";
import { signInValidationSchema } from "../actions/loginAction";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window").height;

const onSubmit = (email, password, dispatch) => {
  dispatch(signIn({ email, password }));
};

export default function LoginScreen({ navigation }) {
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
              fontSize: 30,
              color: "#252D76",
              fontWeight: "bold",
              fontStyle: "normal",
              padding: width / 20,
              fontFamily: "RobotoSlab-Bold",
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
              fontFamily: "RobotoSlab-Bold",
            }}
          >
            Регистрация
          </Label>
        </CardItem>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({ handleChange, handleBlur, values, errors, isValid }) => (
            <>
              <CardItem>
                <Input
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
                <Label
                  style={{
                    color: "#929292",
                    textAlign: "center",
                    flex: 1,
                    fontFamily: "Montserrat-Regular",
                  }}
                >
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
                  Регистрация
                </Label>
              </CardItem>
              <CardItem>
                <Button
                  style={styles.button}
                  onPress={() => {
                    onSubmit(values.email, values.password, dispatch);
                  }}
                >
                  <Label style={styles.button_label}>Войти</Label>
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
    fontFamily: "Montserrat-Bold",
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
  icons: {
    textAlign: "center",
    textAlignVertical: "center",
  },
});
