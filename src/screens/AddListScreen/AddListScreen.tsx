import React, { useState } from 'react';
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

export interface formValues {
    listName: string;
    color: string;
}

const FormValidationSchema = Yup.object().shape({
    listName: Yup.string().required('List name is required'),
    color: Yup.string().required('color is required'),
});

const AddListScreen: React.FC<any> = ({
    navigation,
}: {
    navigation: NavigationProp<any, any>;
}) => {
    const {
        values,
        handleChange,
        handleBlur,
        setFieldValue,
        touched,
        errors,
        handleSubmit,
    } = useFormik<formValues>({
        initialValues: {
            listName: '',
            color: Colors.BLUE,
        },
        validationSchema: FormValidationSchema,
        onSubmit: formValues => {
            console.log('submitted' + formValues.color);
        },
    });

    const [selecteColor, setSelectedColor] = useState(Colors.BLUE);
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
                                    setSelectedColor(Colors[item]);
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
                    style={{ width: '60%', height: 50, backgroundColor: selecteColor }}
                    onPress={handleSubmit}>
                    <Text>Create</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default AddListScreen;
