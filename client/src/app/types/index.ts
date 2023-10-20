export interface ITodo {
    text: string
    date: string
    id: string
    completed: boolean
}

export interface IInitialState {
    todos: ITodo[]
    isLoading: boolean
}