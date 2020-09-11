import React from 'react';
import {View, Text, Switch, TouchableOpacity } from 'react-native';
import styles from '../styles';

class GoalItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item, onDelete } = this.props;
    return (
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <View style={styles.itemWrapper}>
          <Text style={styles.eachItem}>{item.id}.{item.content}</Text>
          <Switch style={styles.switchPosition}/>
        </View>
      </TouchableOpacity>
    );
  }
}

export default GoalItem;