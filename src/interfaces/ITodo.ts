export interface ITodo {
    id: string;
    task: string;
    isDone: number;
}

export interface ITodoAll {
    items: ITodo[];
}
