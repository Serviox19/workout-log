import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, List, ListItem, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { exercisesFetch } from '../actions/ExerciseActions';

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = { loading: true }
  }

  componentWillMount() {
    this.props.exercisesFetch();
    // this.renderContent();
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  componentDidMount() {
    // console.log(this.props.exercises);
  }

  renderListItem() {
    const exercises = this.props.exercises;
    if (!exercises) {
      return (
        <Text>Nothing</Text>
      )
    } else {
      return Object.keys(exercises).map(function(key) {
        return (
          <ListItem
            onPress={() => console.log(key)}>
            <Body>
              <Text>{
                //Capitalize first letter
                exercises[key].type.charAt(0).toUpperCase() + exercises[key].type.substr(1)}
              </Text>
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
