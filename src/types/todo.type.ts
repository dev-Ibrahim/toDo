export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

export type TodoList = {
  id: number;
  todos: Todo[];
  listName: string;
  color?: string;
};

export type TodosContextState = {
  toDoList: TodoList[];
  currentColor: string;
  currentTodoList?: TodoList;
  setCurrentTodoList: (id: number) => void;
  setCurrentColor: (color: string) => void;
  addToDoList: (name: string) => void;
  // getTodoList: (id: number) => TodoList;
  // upDateTodoList: (id: number) => void;
  // addToDoItem: (item: Todo) => void;
  // toggleTodoItem: (itemId: number) => void;
};
