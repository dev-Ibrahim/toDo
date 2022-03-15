export type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export type TodoList = {
  id: number;
  todos: Todo[];
  color: string;
};

export type TodosContextState = {
  todos: TodoList[];
  currentTodo: TodoList;
  addTodoList: (name: string, color: string) => void;
  getTodoList: (id: number) => TodoList;
  upDateTodoList: (id: number) => void;
  addToDoItem: (item: Todo) => void;
  toggleTodoItem: (itemId: number) => void;
};
