/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Typography } from '../../styles';
import { TodoContext } from '../../context';
import { formValues, FormValidationSchema } from '../AddListScreen/AddListScreen';
import { useFormik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListTodoItem } from '../../components';
import { styles } from './ListDetailsScreen.styles';
import { style } from '../HomeScreen/HomeScreen.styles';

const ListDetailsScreen: React.FC<any> = () => {
    const TodoCtx = useContext(TodoContext);
    const { values, handleChange, handleBlur, handleSubmit } =
        useFormik<formValues>({
            initialValues: {
                Name: '',
            },
            validationSchema: FormValidationSchema,
            onSubmit: todoName => {
                TodoCtx?.addToDoItem(todoName.Name);
            },
        });
    return (
        <SafeAreaView>
            <View style={[styles.header, { borderBottomColor: TodoCtx?.currentTodoList?.color }]}>
                <View style={styles.titleWrapper}>
                    <Text style={Typography.title}>
                        {TodoCtx?.currentTodoList.listName}
                    </Text>
                    <TouchableOpacity style={styles.closeButton}>

                        <Text style={styles.closeSign}>&#x2715;</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.stats}>
                    <Text style={Typography.taskcount}>{TodoCtx?.getStats(TodoCtx.currentTodoList?.id).done}</Text>
                    <Text style={Typography.taskcount}>of</Text>
                    <Text style={Typography.taskcount}>{TodoCtx?.getStats(TodoCtx.currentTodoList?.id).total}</Text>
                    <Text style={Typography.taskcount}>Tasks</Text>
                </View>
            </View>
            <View style={styles.todoList}>

                <FlatList
                    data={TodoCtx?.currentToDoItems}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <ListTodoItem todo={item} />
                    )}
                />
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.textInput}
                    placeholder=""
                    value={values.Name}
                    onChangeText={handleChange('Name')}
                    onBlur={handleBlur('Name')}
                />
                <Text>{erros}</Text>
                <TouchableOpacity
                    style={[styles.AddButton, { backgroundColor: TodoCtx?.currentTodoList?.color }]}
                    onPress={handleSubmit}>
                    <Text style={styles.AddbuttonText}>&#43;</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ListDetailsScreen;
