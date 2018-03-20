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
    console.log(this.props.exercises);
  }

  // // alternate rendering
  // renderListItem() {
  //   const exercise = this.props.exercises;
  //   return Object.keys(exercise).map(function(key) {
  //     return (
  //       <ListItem
  //         onPress={() => console.log('pressed list item')}>
  //         <Text>{exercise[key].type}</Text>
  //       </ListItem>
  //     );
  //   });
  // }

  render() {
    return (
      <View>
        <List
          dataArray={this.props.exercises}
          button={true}
          renderRow={(exercise) =>
            <ListItem
              icon
              onPress={() => console.log('hit list btn')}>
              <Body>
                <Text>{exercise.type}</Text>
              </Body>
              <Right>
                <Icon ios='ios-arrow-forward' android='arrow-right' />
              </Right>
            </ListItem>
          }>
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
