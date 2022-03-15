import React, { Fragment } from 'react';
import { Pressable, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../../styles';
import { style } from './HomeScreen.styles';

const HomeScreen: React.FC<any> = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
    return (

        <SafeAreaView>
            <Fragment>
                <View style={style.flexEndContainer}>
                    <View style={style.titleWrapper}>
                        <Text style={Typography.title}>Todo</Text>
                        <Text style={Typography.subTitle}>List</Text>
                    </View>
                    <View>
                        <Pressable style={style.button} onPress={() => {
                            navigation.navigate('AddList')
                        }}>
                            <Text style={style.buttonText}>&#43;</Text>
                        </Pressable>
                    </View>
                </View>
            </Fragment>

        </SafeAreaView>
    );
};

export default HomeScreen;
