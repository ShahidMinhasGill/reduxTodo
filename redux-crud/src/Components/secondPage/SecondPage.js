import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function SecondPage() {
    const navigate = useNavigate();
    const getTodo = useSelector((state) => state.todo);
    console.log('getTodo', getTodo);

    return (
        <>
            <button onClick={() => navigate(-1)}>go back</button>
            <div>
                <ul class="task-list">
                    {

                        getTodo.map((item, i) => {
                            return <>
                                <li class="task-list-item" v-for="task in tasks">
                                    <label class="task-list-item-label">
                                        {/* <input type="checkbox" /> */}
                                        <span>{item.text}</span>
                                    </label>
                                    {/* <span onClick={() => edit(item)} class="edit-btn" title="Edit Item"><BiEditAlt size={20} /></span>
                                <span onClick={() => delItem(i)} class="delete-btn" title="Delete Item"><MdDelete size={20} /></span> */}
                                    {/* <span class="edit-btn" title="Delete Task">dd</span> */}
                                </li>




                            </>
                        })
                    }

                </ul>
            </div>
        </>

    )
}
