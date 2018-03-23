import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, List, ListItem, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions/ExerciseActions';
import { Actions } from 'react-native-router-flux';

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.props.exercisesFetch();
    this.state = { loading: true };
  }

  componentDidMount() {
    console.log(this.props.exercises);
  }

  renderListItem() {
    const exercises = this.props.exercises.types;
    if (exercises == null) {
      return (
        <Text style={{ textAlign: 'center' }}>Add Categories</Text>
      )
    } else {
      return Object.keys(exercises).map(function(data) {
        return (
          <ListItem
            onPress={() => Actions.categoryList(
              {id: data, category: exercises[data].name})}>
            <Body>
              <Text>{exercises[data].name}</Text>
            </Body>
            <Right>
              <Icon ios='ios-arrow-forward' android='arrow-right' />
            </Right>
          </ListItem>
        );
      });
    }
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
