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
    Name: string;
}

export const FormValidationSchema = Yup.object().shape({
    Name: Yup.string().required('List name is required'),
});

const AddListScreen: React.FC<any> = ({
    navigation,
}: {
    navigation: NavigationProp<any, any>;
}) => {
    const TodoCtx = useContext(TodoContext);

    const { values, handleChange, handleBlur, handleSubmit } =
        useFormik<formValues>({
            initialValues: {
                Name: '',
            },
            validationSchema: FormValidationSchema,
            onSubmit: formValues => {
                TodoCtx?.addToDoList(formValues.Name);
                navigation.navigate('Home');
            },
        });

    const colorsRender = Object.keys(Colors);

    return (
        <SafeAreaView>
            <View style={style.centerContainer}>
                <Text style={Typography.title}>Create Todo List</Text>

                <View style={style.inputsWrapper}>
                    <TextInput
                        style={style.inputText}
                        placeholder="list name"
                        value={values.Name}
                        onChangeText={handleChange('Name')}
                        onBlur={handleBlur('Name')}
                    />
                    <View style={style.colorpicker}>
                        {colorsRender.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        TodoCtx?.setCurrentColor(Colors[item]);
                                    }}
                                    style={[
                                        style.colorpickerItem,
                                        {
                                            backgroundColor: Colors[item],
                                        },
                                    ]}
                                />
                            );
                        })}
                    </View>
                    <TouchableOpacity
                        style={[
                            style.createButton,
                            {
                                backgroundColor: TodoCtx?.currentColor,
                            },
                        ]}
                        onPress={handleSubmit}>
                        <Text>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default AddListScreen;
