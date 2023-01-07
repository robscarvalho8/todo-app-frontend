import { useCallback, useState } from 'react';
import { ITodo } from '../interfaces/ITodo';
import { TodoService } from '../services/TodoService';

export const useTodo = () => {
    const [tasks, setTasks] = useState<ITodo[]>([]);

    const getAllTodos = useCallback(async () => {
        const { status, data } = await TodoService.getAllTodos();

        if (status !== 200) throw new Error();
        setTasks(data.items);
    }, []);

    const createTodo = useCallback(async (todo: Pick<ITodo, 'task' | 'isDone'>) => {
        const { status } = await TodoService.createTodo(todo);

        if (status !== 201) throw new Error();
    }, []);

    const updateTodo = useCallback(async (id: string, todo: Pick<ITodo, 'task' | 'isDone'>) => {
        const { status } = await TodoService.updateTodo(id, todo);

        if (status !== 200) throw new Error();
    }, []);

    const deleteTodo = useCallback(async (id: string) => {
        const { status } = await TodoService.deleteTodo(id);

        if (status !== 204) throw new Error();
    }, []);

    return {
        tasks,
        getAllTodos,
        createTodo,
        updateTodo,
        deleteTodo,
    };
};
