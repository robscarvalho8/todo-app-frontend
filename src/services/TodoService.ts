import { Api } from '../providers';

const getAll = () => Api.get('/v1/todos');

export const TodoService = {
    getAll,
};
