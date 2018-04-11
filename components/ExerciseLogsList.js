import React, { Component } from 'react';
import { Form, Item, Input } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Picker, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import {
  exerciseLogCreate,
  exerciseLogDelete,
  exerciseLogsFetch
} from '../actions/LogsActions';

class LogsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weight: '',
      rep: ''
    }
    console.log(`Category Id: ${this.props.category}`);
    console.log(`Exercise Key: ${this.props.exerciseKey}`);
  }

  onInputChange(weight) {
    this.setState({ weight });
  }

  reps() {
    return [
      {_id: 0, rep: '1'},
      {_id: 1, rep: '2'},
      {_id: 2, rep: '3'},
      {_id: 3, rep: '4'},
      {_id: 4, rep: '5'},
      {_id: 5, rep: '6'},
      {_id: 6, rep: '7'},
      {_id: 7, rep: '8'},
      {_id: 8, rep: '9'},
      {_id: 9, rep: '10'},
      {_id: 10, rep: '11'},
      {_id: 11, rep: '12'},
      {_id: 12, rep: '13'},
      {_id: 13, rep: '14'},
      {_id: 14, rep: '15'}
    ]
  }

  renderReps() {
    return this.reps().map((rep) => {
      return <Picker.Item key={rep._id} label={rep.rep} value={rep.rep} />
    });
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>
          <View
            style={styles.top}>
            <Text
              style={{ textAlign: 'center' }}>
              Exercise Logs List
            </Text>
            <Text
              style={{ textAlign: 'center' }}>
              {`Category Id: ${this.props.category}`}
            </Text>
            <Text
              style={{ textAlign: 'center' }}>
              {`Exercise Key: ${this.props.exerciseKey}`}
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>
          <View style={styles.bottom}>
            <View style={styles.left}>
              <Form>
                <Item
                  inlineLabel
                  style={{ marginBottom: 10, borderBottomColor: '#000' }}>
                  <Input
                    placeholder="Enter Weight lbs"
                    onChangeText={(weight) => this.onInputChange(weight)}
                    value={this.state.weight}
                    keyboardType='numeric'
                  />
                </Item>
              </Form>
            </View>
            <View style={styles.right}>
              <Picker
                style={styles.pickerStyle}
                selectedValue={this.state.rep}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) => this.setState({ rep: itemValue })}>
                {this.renderReps()}
              </Picker>
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={() => console.log('toggle add log')}>
                <Text
                  style={{ color: '#FFFFFF', textAlign: 'center' }}>
                  Add Log</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const HALF_SCREEN = 0.5 * SCREEN_WIDTH;

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  top: {
    paddingTop: 20,
    width: '100%',
    height: '60%'
  },
  bottom: {
    height: '40%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'row'
  },
  left: {
    flexDirection: 'column',
    width: HALF_SCREEN,
  },
  right: {
    flexDirection: 'column',
    width: HALF_SCREEN,
    alignItems: 'center'
  },
  pickerStyle: {
    width: '100%'
  },
  buttonView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

const mapStateToProps = state => {
  const logs  = state.logs;

  return { logs };
}


export default connect(mapStateToProps, {
  exerciseLogCreate,
  exerciseLogDelete,
  exerciseLogsFetch })(LogsList);
