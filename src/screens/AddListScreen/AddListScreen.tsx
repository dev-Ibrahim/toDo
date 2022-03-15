import React, { useContext, useState } from 'react';
import {
    FlatList,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    View,
} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Colors, Typography } from '../../styles';
import { style } from './AddListScreen.styles';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { TodosContextState, TodoList, Todo } from '../../types/todo.type';
import { TodoContext } from '../../context';

export interface formValues {
    listName: string;
    color: string;
}

const FormValidationSchema = Yup.object().shape({
    listName: Yup.string().required('List name is required'),
    color: Yup.string().required('color is required'),
});

const AddListScreen: React.FC<any> = () => {
    const TodoCtx = useContext(TodoContext);

    const { values, handleChange, handleBlur, handleSubmit } = useFormik<TodoList>({
        initialValues: {
            id: Math.floor(Math.random() * 1000),
            todos: [],
            listName: '',
            color: Colors.BLUE,
        },
        validationSchema: FormValidationSchema,
        onSubmit: formValues => {
            console.log('submitted' + formValues.listName);
            TodoCtx?.addToDoList(formValues.listName);
            console.log(TodoCtx?.toDoList.length);
        },
    });

    const [selectedColor, setSelectedColor] = useState(Colors.BLUE);
    const colorsRender = Object.keys(Colors);

    return (
        <SafeAreaView>
            <View style={style.centerContainer}>
                <View>
                    <Text style={Typography.title}>Create Todo List</Text>
                    <TextInput
                        style={{ width: 100, backgroundColor: 'red' }}
                        placeholder="list name"
                        value={values.listName}
                        onChangeText={handleChange('listName')}
                        onBlur={handleBlur('listName')}
                    />
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    {colorsRender.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    TodoCtx?.setCurrentColor(Colors[item]);
                                }}
                                style={{
                                    backgroundColor: Colors[item],
                                    width: 30,
                                    height: 20,
                                    marginRight: 20,
                                }}
                            />
                        );
                    })}
                </View>
                <Pressable
                    style={{
                        width: '60%',
                        height: 50,
                        backgroundColor: TodoCtx?.currentColor,
                    }}
                    onPress={handleSubmit}>
                    <Text>Create</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default AddListScreen;
