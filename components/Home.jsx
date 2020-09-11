import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text,
  FlatList,
  CheckBox
} from 'react-native';
import styles from '../styles';
import GoalModal from './Modal';
import GoalItem from './GoalItem';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      courseGoals: []
    };
  }

  insertGoal = (newGoal) => {
    if (newGoal.content) {
      this.setState({
        // add new value
        courseGoals: [...this.state.courseGoals, newGoal]
      });
    }
    this.closeModal();
  }

  openModal = () => {
    this.setState({ modalVisible: true });
  }

  closeModal = () => {
    this.setState({ modalVisible: false });
  }

  removeGoal = (goalId) => {
    const courseGoals = this.state.courseGoals.filter((goal) =>  goal.id !== goalId);
    this.setState({ courseGoals });
  }

  render() {

    const { modalVisible, courseGoals } = this.state;
    return (
      <View style={styles.container}>

        <GoalModal 
          modalVisible={modalVisible} 
          closeModal={this.closeModal} 
          courseGoals={courseGoals}
          handleSubmit={this.insertGoal}
        />
        <Text style={styles.headerTitle}>Goal App</Text>

        <FlatList
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem onDelete={this.removeGoal} item={item} />
          )}
          keyExtractor={item => item.id}
        />

        {/* below scroll view */}
        <TouchableOpacity
          onPress={() => { this.openModal() }}
          style={styles.addButton}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
