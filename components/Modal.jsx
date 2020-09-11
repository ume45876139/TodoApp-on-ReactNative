import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Alert,
  Modal,
  Text,
  TextInput,
} from 'react-native';
import styles from '../styles';

class GoalModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredGoal: {}
    }
  }

  handleGoalInput = (input) => {
    const enteredGoal = {
      id: (this.props.courseGoals.length + 1).toString(),
      content: input
    }
    this.setState({ enteredGoal });
  }

  submitGoalHandler = () => {
    const { enteredGoal } = this.state;
    if(enteredGoal.content) {
      this.props.handleSubmit(enteredGoal);
      this.setState({ enteredGoal: {} });
    }
  }

  cancelHandler = () => {
    this.props.closeModal();
    this.setState({ enteredGoal: {} });
  }

  render() {
    const { enteredGoal } = this.state;
    const { modalVisible }  = this.props;
    return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.modalView}>
        <TextInput
          style={styles.inputTask}
          placeholder="New Task ..."
          value={enteredGoal.content}
          onChangeText={this.handleGoalInput}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={this.cancelHandler}
          >
            <Text style={styles.addButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={this.submitGoalHandler}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    );
  }
}

export default GoalModal;