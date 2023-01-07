import { ITodo, ITodoAll } from '../interfaces/ITodo';
import { Api } from '../providers';

const getAllTodos = () => Api.get<ITodoAll>('/v1/todos');

export const TodoService = {
    getAllTodos,
};
