import React from 'react';
import { Text, View } from 'react-native';
import { Todo, TodoList } from '../../types/todo.type';
import { styles } from './TodoListCard.style';

const TodoListCard: React.FC<TodoList> = ({ id, listName, color: bgColor }) => {
    return (
        <View key={id} style={[styles.card, { backgroundColor: bgColor }]}>
            <View>
                <Text>{listName}</Text>
            </View>
            <View>
                <Text>0</Text>
                <Text>Remaining</Text>
            </View>
            <View>
                <Text>0</Text>
                <Text>Completed</Text>
            </View>
        </View>
    );
};

export default TodoListCard;
