import React, { Fragment, useContext } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '../../styles';
import { style } from './HomeScreen.styles';
import { TodoContext } from '../../context';
import { TodoListCard } from '../../components';

const HomeScreen: React.FC<any> = ({
    navigation,
}: {
    navigation: NavigationProp<any, any>;
}) => {
    const TodoCtx = useContext(TodoContext);
    return (
        <SafeAreaView>
            <Fragment>
                <View style={style.flexEndContainer}>
                    <View style={style.titleWrapper}>
                        <Text style={Typography.title}>Todo</Text>
                        <Text style={Typography.subTitle}>List</Text>
                    </View>
                    <View>
                        <Pressable
                            style={style.button}
                            onPress={() => {
                                navigation.navigate('AddList');
                            }}>
                            <Text style={style.buttonText}>&#43;</Text>
                        </Pressable>
                    </View>
                </View>
                <ScrollView>
                    {TodoCtx?.toDoList.length !== 0 && (
                        <FlatList
                            horizontal
                            data={TodoCtx?.toDoList}
                            keyExtractor={item => `${item.id}`}
                            renderItem={({ item }) => (
                                <TodoListCard
                                    id={item.id}
                                    listName={item.listName}
                                    color={item.color}
                                    todos={item.todos}
                                />
                            )}
                        />
                    )}
                </ScrollView>
            </Fragment>
        </SafeAreaView>
    );
};

export default HomeScreen;
