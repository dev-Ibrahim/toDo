import React from 'react';
import type { TodosContextState } from '../../types/todo.type';

const TodoContext = React.createContext<TodosContextState | null>(null);

export default TodoContext;
