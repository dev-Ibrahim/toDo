import React from 'react';
import { Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Colors, Typography } from '../../styles';
import { style } from './AddListScreen.styles';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';

interface formValues {
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
            console.log('submitted' + formValues);
        },
    });

    return (
        <View style={style.centerContainer}>
            <Text style={Typography.title}>Create Todo List</Text>
        </View>
    );
};

export default AddListScreen;
