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

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  componentDidMount() {
    // console.log(this.props.exercises);
  }

  renderListItem() {
    const exercises = this.props.exercises.types;
    if (!exercises) {
      return (
        <Text>Nothing</Text>
      )
    } else {
      return Object.keys(exercises).map(function(key) {
        return (
          <ListItem
            onPress={() => Actions.categoryList(key)}>
            <Body>
              <Text>{exercises[key].name}</Text>
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
