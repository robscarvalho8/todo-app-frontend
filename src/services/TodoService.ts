import { ITodo, ITodoAll } from '../interfaces/ITodo';
import { Api } from '../providers';

const getAll = async () => Api.get<ITodoAll>('/v1/todos');

export const TodoService = {
    getAll,
};
