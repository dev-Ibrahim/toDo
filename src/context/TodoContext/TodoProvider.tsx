import React, { useEffect, useState } from 'react';
import type { TodoList, Todo } from '../../types/todo.type';
import { Colors } from '../../styles';
import TodoContext from './TodoContext';

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [toDoList, setTodoList] = useState<TodoList[]>([]);
    const [currentTodoList, setCTodoList] = useState<TodoList>();
    const [currentColor, setColor] = useState(Colors.BLUE);
    const [currentToDoItems, setCurrentTodoItems] = useState<Todo[]>([]);

    const addToDoList = (name: string) => {
        let newTodoList: TodoList = {
            id: Math.floor(Math.random() * 100),
            todos: [],
            listName: name,
            color: currentColor,
        };
        setTodoList([...toDoList, newTodoList]);
    };

    const setCurrentColor = (colorHex: string) => {
        setColor(colorHex);
    };

    const setCurrentTodoList = (id: number) => {
        let todoList = toDoList.filter(item => id === item.id)[0];
        setCTodoList(todoList);
        setCurrentTodoItems(todoList.todos);
    };

    const addToDoItem = (name: string) => {
        let newToDoItem: Todo = {
            id: Math.floor(Math.random() * 100),
            title: name,
            isDone: false,
        };
        let updatedTodoItems = [...currentToDoItems, newToDoItem];
        setCurrentTodoItems(updatedTodoItems);

        setCTodoList({
            id: currentTodoList?.id,
            todos: updatedTodoItems,
            listName: currentTodoList?.listName,
            color: currentTodoList?.color,
        });
        updateToDoList(currentTodoList?.id);
        console.log("new: " + updateToDoList.length + "todos: " + currentTodoList?.todos.length)
    };
    const updateToDoList = (id?: number) => {
        setTodoList(
            toDoList.map(item => {
                if (item.id === id) {
                    return {
                        id: currentTodoList?.id,
                        todos: currentToDoItems,
                        listName: currentTodoList?.listName,
                        color: currentTodoList?.color,
                    };
                } else {
                    return item;
                }
            }),
        );
    };
    const toggleToDoItem = (id?: number) => {
        setCurrentTodoItems(
            currentToDoItems.map(item => {
                if (item.id === id) {
                    return {
                        id: item.id,
                        title: item.title,
                        isDone: !item.isDone,
                    };
                } else {
                    return item;
                }
            }),
        );
        updateToDoList(currentTodoList?.id);
    };

    const deleteToDoItem = (id: number) => {
        setCurrentTodoItems(currentToDoItems.filter(item => item.id !== id));
        updateToDoList(currentTodoList?.id);
    };

    const getStats = (listid: number) => {
        let todolist = toDoList.find(({ id }) => id === listid);

        return {
            done: todolist?.todos.filter(item => item.isDone).length,
            total: todolist?.todos.length,
        };
    };
    return (
        <TodoContext.Provider
            value={{
                toDoList,
                currentColor,
                addToDoList,
                setCurrentColor,
                setCurrentTodoList,
                currentTodoList,
                addToDoItem,
                currentToDoItems,
                updateToDoList,
                toggleToDoItem,
                deleteToDoItem,
                getStats,
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
