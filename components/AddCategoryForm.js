import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Left, Right, Body, Icon, Title, Form, Item, Input, Label, Button, Picker } from 'native-base';
import { connect } from 'react-redux';
import { categoryCreate } from '../actions/ExerciseActions';
import firebase from 'firebase';

class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: null
    }
    this.addWorkout = this.addWorkout.bind(this);
  }

  //Get Selected Category
  onCategoryChange(value: string) {
    this.setState({
      selectedCategory: value
    });
  }

  //Do something with the data
  addWorkout() {
    const type = this.state.selectedCategory;

    if (type !== null) {
      this.props.categoryCreate({ type });
      this.setState({ selectedCategory: null });
      this.props.addExercise();
    } else {
      this.props.sendError('Please enter all fields!')
    }
  }

  render() {
    return (
      <View>
        <Form>
          <Item style={{ justifyContent: 'center' }}>
            <Label style={{ color: "#000" }}>Category</Label>
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
              <Item label="Chest" value="Chest" />
              <Item label="Back" value="Back" />
              <Item label="Shoulders" value="Shoulders" />
              <Item label="Legs" value="Legs" />
              <Item label="Arms" value="Arms" />
              <Item label="Abs" value="Abs" />
            </Picker>
          </Item>
          <Button onPress={this.addWorkout} style={styles.buttonStyle} block light>
            <Text>Add Category</Text>
          </Button>
        </Form>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { category } = state.exerciseForm;

  return { category };
}

export default connect(mapStateToProps, { categoryCreate })(AddCategory);

const styles = {
  viewStyle: {

  },
  buttonStyle: {
    marginTop: 25
  }
}
