import React, { Component } from 'react';
import { Alert, View, Modal, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import AddWorkout from './AddWorkoutForm';

export const ModalComponent = ({ modalVisible, toggleModal }) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        >
        <View style={styles.modalContainer}>
          <View style={styles.closeView}>
            <TouchableOpacity
              onPress={toggleModal}>
              <Icon name='ios-close'
                style={{fontSize: 50, color: 'black'}}/>
            </TouchableOpacity>
          </View>
          <AddWorkout
            addExercise={toggleModal}
            sendError={(err) =>
              Alert.alert(err, 'or not...',
                [{text: 'OK'}],
                { cancelable: false }
              )
            }
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = {
  modalContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  closeView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 25
  }
}
