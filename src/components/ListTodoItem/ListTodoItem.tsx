import React, { useContext, useState } from 'react';
import { Touchable, TouchableOpacity, View, Text } from 'react-native';
import { Todo, Typography } from '../../styles';
import { TodoContext } from '../../context';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './ListTodoItem.style';
import { style } from '../../screens/HomeScreen/HomeScreen.styles';
const ListTodoItems: React.FC<Todo> = ({ todo }: { todo: Todo }) => {
    const { toggleToDoItem, deleteToDoItem } = useContext(TodoContext);
    const [checkboxValue, toggleCheckBox] = useState(todo.isDone);
    return (
        <TouchableOpacity
            key={todo.id}
            onLongPress={() => {
                deleteToDoItem(todo.id);
            }}
        >
            <View style={styles.container}>
                <CheckBox
                    disabled={false}
                    value={checkboxValue}
                    onValueChange={newValue => {
                        toggleCheckBox(newValue);
                        toggleToDoItem(todo.id);
                    }}
                />
                <Text style={styles.title}> {todo.title} </Text>
            </View>
        </TouchableOpacity>
    );
};

export default ListTodoItems;
