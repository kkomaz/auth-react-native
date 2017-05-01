import React, { Component } from 'react';
import { TextInput } from 'react-native';
import {
  Button,
  Card,
  CardSection,
} from './common';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  render() {
    console.log(this.state.text);
    return (
      <Card>
        <CardSection>
          <TextInput
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>
            Sign in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
