import React, { Component } from 'react';
import { View, Modal, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import AddWorkout from './AddWorkoutForm';

export const ModalComponent = ({ modalVisible, toggleModal }) => {
  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        >
        <View style={styles.modalContainer}>
          <View style={styles.closeView}>
            <TouchableHighlight
              onPress={toggleModal}>
              <Icon name='ios-close'
                style={{fontSize: 50, color: 'black'}}/>
            </TouchableHighlight>
          </View>
          <AddWorkout />
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  modalContainer: {
    marginTop: 50,
    flexDirection: 'column'
  },
  closeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25
  }
}
