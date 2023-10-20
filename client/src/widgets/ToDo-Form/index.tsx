import React, { useState } from "react"
import { Button } from "../../shared/ui/Button"
import { Input } from "../../shared/ui/Input"
import { nanoid } from 'nanoid'
import {useAddTodoMutation} from "../../shared/http/todosApi";

export const TodoForm = () => {
    const [text, setText] = useState<string>('')
    const newID = nanoid()
    const [addTodo, {isLoading}] = useAddTodoMutation()

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value
        setText(targetValue)
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        await addTodo({
            text: text,
            id: newID,
            date: new Date().toLocaleString(),
            completed: false
        }).unwrap()
        setText('')
    }

    return (
        <form action="#" className="todoForm">
            <Input
                className="todoForm__input input__text-todo"
                type="text"
                placeholder='Введите содержание'
                onChange={handleChangeText}
                value={text}
            />
            <Button
                className="todoForm__button"
                buttonName="Добавить"
                onClick={handleClick}
            />
        </form>
    )
}