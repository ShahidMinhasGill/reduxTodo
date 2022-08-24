import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import Todo from './Todo';
import { addTodo, DeleteItem, editItem } from '../../Redux/Counter/Actions';
import { MdDelete } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import './Displaytodo.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import toast, { Toaster } from 'react-hot-toast';

export default function DisplayTodo() {
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [updateId, setupdateId] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const gData = useSelector(addTodo);
    const getdata = gData.text.todo;
    console.log('getdata', getdata);
    const delItem = (id) => {
        toast.success('Successfully Deleted!')
        dispatch(DeleteItem(id));
    }
    const edit = (item) => {
        console.log('edit data', item);
        handleShow(true)
        setText(item);
        setupdateId(item.id)
    }
    const updateData = () => {
        toast.success('Successfully Updated!')
        dispatch(editItem(text, updateId, getdata));
        handleClose();
    }


    return (
        <div>
            <ul class="task-list">
                {

                    getdata.map((item, i) => {
                        return <>
                            <li class="task-list-item" v-for="task in tasks">
                                <label class="task-list-item-label">
                                    {/* <input type="checkbox" /> */}
                                    <span>{item.text}</span>
                                </label>
                                <span onClick={() => edit(item)} class="edit-btn" title="Edit Item"><BiEditAlt size={20} /></span>
                                <span onClick={() => delItem(i)} class="delete-btn" title="Delete Item"><MdDelete size={20} /></span>
                                {/* <span class="edit-btn" title="Delete Task">dd</span> */}
                            </li>



                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Update Modal</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Update Data</Form.Label>
                                            <Form.Control
                                                placeholder="enter your text"
                                                autoFocus
                                                defaultValue={text.text} onChange={(e) => setText(e.target.value)}
                                            />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={() => updateData(item)} >
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                    })
                }

            </ul>
            <Toaster />

        </div >
    )
}
