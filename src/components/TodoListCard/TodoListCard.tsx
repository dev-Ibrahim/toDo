import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { Todo, TodoList } from '../../types/todo.type';
import { styles } from './TodoListCard.style';
import { TodoContext } from '../../context';

const TodoListCard: React.FC<TodoList> = ({ id, listName, color: bgColor }) => {
    const TodoCtx = useContext(TodoContext);
    const stats = TodoCtx?.getStats(id);
    return (
        <View key={id} style={[styles.card, { backgroundColor: bgColor }]}>
            <View>
                <Text>{listName}</Text>
            </View>
            <View>
                <Text>{stats?.total - stats?.done}</Text>
                <Text>Remaining</Text>
            </View>
            <View>
                <Text>{stats?.done}</Text>
                <Text>Completed</Text>
            </View>
        </View>
    );
};

export default TodoListCard;
