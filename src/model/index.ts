import rootReducers from '../redux/reducers';

export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
};

export type TodosState = Todo[];

export type TodoAppState = ReturnType<typeof rootReducers>;
