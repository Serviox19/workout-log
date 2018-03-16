import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right, Body, Icon, Title, Form, Item, Input, Label, Button, Picker } from 'native-base';

export default class AddWorkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null,
      exercise: ''
    }
    this.addWorkout = this.addWorkout.bind(this);
  }

  //Get Selected Category
  onCategoryChange(value: string) {
    this.setState({
      selectedCategory: value
    });
  }

  //Get exercise text input
  onExerciseChange(text) {
    this.setState({ exercise: text });
  }

  //Do something with the data
  addWorkout() {
    console.log(`Category: ${this.state.selectedCategory},
    Exercise: ${this.state.exercise}`);
    this.setState({ selectedCategory: null });
    this.setState({ exercise: '' });
  }

  render() {
    return (
      <View>
        <Form>
          <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "rgb(0,122,255)" }}>
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
            note={false}
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
            <Input
              placeholder="Enter Exercise Name"
              onChangeText={this.onExerciseChange.bind(this)}
              value={this.state.exercise}
            />
          </Item>
          <Button onPress={this.addWorkout} style={styles.buttonStyle} block light>
            <Text>Add Workout</Text>
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
