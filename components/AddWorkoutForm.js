import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right, Body, Icon, Title, Form, Item, Input, Label, Button, Picker } from 'native-base';

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  onCategoryChange(value: string) {
    this.setState({
      selectedCategory: value
    });
  }

  render() {
    return (
      <View>
        <Form>
          <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "#f44242" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Select Body Part</Title>
                  </Body>
                  <Right />
                </Header>}
            mode="dropdown"
            placeholder="Select Category"
            selectedValue={this.state.selectedCategory}
            onValueChange={this.onCategoryChange.bind(this)}
          >
            <Item label="Chest" value="chest" />
            <Item label="Back" value="back" />
            <Item label="Shoulders" value="shoulders" />
            <Item label="Legs" value="legs" />
            <Item label="Arms" value="arms" />
            <Item label="Abs" value="abs" />
          </Picker>
          <Item inlineLabel>
            <Label>Exercise</Label>
            <Input />
          </Item>
          <Button style={styles.buttonStyle} block light>
            <Text>Light</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const styles = {
  viewStyle: {

  },
  buttonStyle: {
    marginTop: 25
  }
}
