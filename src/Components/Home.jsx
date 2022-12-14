import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreseCounter } from '../Redux/Counter/Actions';
import { Button, Navbar } from "react-bootstrap";
import './Home.css';
import secndPage from '../Components/secondPage/SecondPage';
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div>
            <Navbar className="mynavbg">
                <div className="container">
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>


                            <Link to='/add/todo'>
                                <Button className="mybutn2" >
                                    Add Todo
                                </Button>
                            </Link>
                            <Link to='/SecondPage'>
                                <Button className="mybutn2" >
                                    All List
                                </Button>
                            </Link>



                        </Navbar.Text>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
