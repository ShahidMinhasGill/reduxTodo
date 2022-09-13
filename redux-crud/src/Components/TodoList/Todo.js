import React from 'react'
import { addTodo } from '../../Redux/Counter/Actions';
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from 'react-hot-toast';
import DisplayTodo from './DisplayTodo';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Todo() {
    const navigate = useNavigate();
    let input;
    const dispatch = useDispatch();
    return (
        <>
            <button onClick={() => navigate(-1)}>go back</button>
            <Link to='/SecondPage'>

                <button >New Page</button>
            </Link>

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
                <DisplayTodo />
            </div>
        </>
    )
}
