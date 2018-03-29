import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import FooterTabs from '../components/Footer';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

class Logs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: null
    }

    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;
    const defaultDate = new Date();
    const date = selectedDate ? selectedDate.toString() : defaultDate.toString();
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content padder>
          <View>
            <CalendarPicker
              onDateChange={this.onDateChange}
              selectedDayColor="lightblue"
            />
            <View style={{ marginTop: 10 }}>
              <Text style={{ textAlign: 'center' }}>{moment(date).format("MMM Do YYYY")}</Text>
            </View>
          </View>
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}

export default Logs;
