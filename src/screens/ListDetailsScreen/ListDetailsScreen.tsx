import React, { useContext } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    FlatList,
} from 'react-native';
import { Typography } from '../../styles';
import { TodoContext } from '../../context';
import { formValues, FormValidationSchema } from '../AddListScreen/AddListScreen';
import { useFormik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

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
            <View>
                <Text style={Typography.title}>
                    {TodoCtx?.currentTodoList.listName}
                </Text>
            </View>
            <View>

                <FlatList
                    data={TodoCtx?.currentToDoItems}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'red', width: 100 }}>
                            <Text>{item.title}</Text>
                        </View>
                    )}
                />
            </View>
            <View>
                <TextInput
                    style={{ width: 100, backgroundColor: 'red' }}
                    placeholder=""
                    value={values.Name}
                    onChangeText={handleChange('Name')}
                    onBlur={handleBlur('Name')}
                />
                <Pressable
                    style={{
                        width: '60%',
                        height: 50,
                        backgroundColor: TodoCtx?.currentTodoList?.color,
                    }}
                    onPress={handleSubmit}>
                    <Text>Create</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default ListDetailsScreen;
