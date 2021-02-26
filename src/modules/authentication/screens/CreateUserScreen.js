import React, { Component } from "react";
import { Container, Content, Card, CardItem, Text } from "native-base";
import firebase from "../../firebase";

export default class CreateUserScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Text>Create User Screen</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
