import React from "react";
import { ITodo } from "../../../app/types"
import { Input } from "../../../shared/ui/Input"
import { Button } from "../../../shared/ui/Button"
import {useDeleteTodoMutation} from '../../../shared/http/todosApi'

import { BsTrash } from 'react-icons/bs'

interface IItem {
    item: ITodo
}

export const TodoItem: React.FC<IItem> = ({item}) => {
    const [deleteTodo] = useDeleteTodoMutation()

    const handleDeleteTodo = async(id: string) => {
        await deleteTodo(id).unwrap()
    }

    return (
        <li className="todo__item">
            <div className="todo__item-content">
                <p className="todo__item-text">{item.text}</p>
                <span className="todo__item-create_date">
                    Добавлено: {item.date}
                </span>
            </div>
            <div className="todo__item-actions">
                <Input
                    className="todo__item-checkbox"
                    type="checkbox"
                    // onChange={() => toggleCompleted(item.id)}
                />

                <Button
                    className="todo__item-button"
                    buttonName={<BsTrash/>}
                    onClick={() => handleDeleteTodo(item.id)}
                />
            </div>
        </li>
    )
}