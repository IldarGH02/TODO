import { ITodo } from "../../app/types"
import { TodoItem } from "./ToDo-Item"
import React from "react";

interface ITodoList {
    list: ITodo[]
}

export const ToDoList: React.FC<ITodoList> = ({list}) => {
    return (
        <div className='todos__content'>
            <h2 className="todos__content-title">
                Задачи:
            </h2>
            <ul className="todo__items">
                {list.map((todo) => {
                    return <TodoItem
                        item={todo}
                        key={todo.id}
                        // removeTodo={removeTodo}
                        // completedTodo={completedTodo}
                    />
                })}
            </ul>
        </div>
    )
}