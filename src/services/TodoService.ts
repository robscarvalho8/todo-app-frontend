import { ITodo, ITodoAll } from '../interfaces/ITodo';
import { Api } from '../providers';

const getAll = () => Api.get<ITodoAll>('/v1/todos');

export const TodoService = {
    getAll,
};
