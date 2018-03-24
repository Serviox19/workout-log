import React, { Component } from 'react';
import { Container, Content, Text, Icon } from 'native-base';
import FooterTabs from '../components/Footer';
import { Actions } from 'react-native-router-flux';
import CategoryList from '../components/CategoryList';
import { ModalComponent } from '../components/Modal';

export default class Workout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    if (typeof nextProps.toggleModal === 'function') {
      this.setModalVisible(!this.state.modalVisible);
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <Container style={{ paddingTop: 20 }}>
        <Content padder>
          <CategoryList />
          <ModalComponent
            modalVisible={this.state.modalVisible}
            toggleModal={() => this.setModalVisible(!this.state.modalVisible)}
          />
        </Content>
        <FooterTabs />
      </Container>
    );
  }
}

const styles = {}
