export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

export type TodoList = object & {
  id?: number;
  todos: Todo[];
  listName?: string;
  color?: string;
};

export type TodosContextState = {
  toDoList: TodoList[];
  currentColor: string;
  currentTodoList?: TodoList;
  currentToDoItems?: Todo[];
  setCurrentTodoList: (id: number) => void;
  setCurrentColor: (color: string) => void;
  addToDoList: (name: string) => void;
  updateToDoList: (id?: number) => void;
  addToDoItem: (name: string) => void;
  toggleToDoItem: (itemId: number) => void;
  deleteToDoItem: (id: number) => void;
};
