import React from 'react'
import { addTodo } from '../../Redux/Counter/Actions';
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';

export default function Todo() {
    let input;
    const dispatch = useDispatch();
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    toast.error("Can't add empty value")
                    return
                }
                dispatch(addTodo(input.value))
                toast.success('Successfully Added!')
                input.value = ''
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
            <Toaster />
        </div>
    )
}
