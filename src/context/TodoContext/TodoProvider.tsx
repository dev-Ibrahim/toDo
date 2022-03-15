import React, { useState } from 'react';
import type { TodosContextState, TodoList, Todo } from '../../types/todo.type';
import { Colors } from '../../styles';
import TodoContext from './TodoContext';

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [toDoList, setTodoList] = useState<TodoList[]>([]);
    const [currentTodoList, setCTodoList] = useState<TodoList>();
    const [currentColor, setColor] = useState(Colors.BLUE);

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
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
