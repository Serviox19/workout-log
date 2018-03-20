import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, List, ListItem, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions/ExerciseActions';

class ExerciseList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.exercisesFetch();
  }

  componentDidMount() {
    // console.log(this.props.exercises);
  }

  //alternate rendering
  renderListItem() {
    const exercises = this.props.exercises;
    return Object.keys(exercises).map(function(key) {
      return (
        <ListItem
          onPress={() => console.log(key)}>
          <Body>
            <Text>{exercises[key].type.charAt(0).toUpperCase() + exercises[key].type.substr(1)}</Text>
          </Body>
          <Right>
            <Icon ios='ios-arrow-forward' android='arrow-right' />
          </Right>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <View>
        <List
          button={true}>
          {this.renderListItem()}
        </List>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const exercises = state.exercises;

  return { exercises };
}

export default
connect(mapStateToProps, { exercisesFetch })(ExerciseList);
