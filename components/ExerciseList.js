import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'native-base';
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
    console.log(this.props.exercises);
  }

  renderListItem() {
    const exercise = this.props.exercises;
    return Object.keys(exercise).map(function(key) {
      return (
        <ListItem
          button={true}
          onPress={() => console.log('pressed list item')}>
          <Text>{exercise[key].type}</Text>
        </ListItem>
      );
    });
  }

  render() {
    return (
      <View>
        <List>
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
