import { useCallback, useState } from 'react';
import { ITodo } from '../interfaces/ITodo';
import { TodoService } from '../services/TodoService';

export const useTodo = () => {
    const [tasks, setTasks] = useState<ITodo[]>([]);

    const getAll = useCallback(async () => {
        const { status, data } = await TodoService.getAll();

        if (status !== 200) throw new Error();
        setTasks(data.items);
        console.log(tasks);
    }, []);

    return {
        tasks,
        getAll,
    };
};
