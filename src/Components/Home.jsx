import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter, decreseCounter } from '../Redux/Counter/Actions';
import { Button, Navbar } from "react-bootstrap";
import './Home.css'
export default function Home() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(increaseCounter());
    }
    const decrement = () => {
        dispatch(decreseCounter());
    }

    return (
        <div>
            <Navbar className="mynavbg">
                <div className="container">
                    <Navbar.Collapse className="justify-content-center">
                        <Navbar.Text>

                            <Button className="mybutn" onClick={increment}>
                                Count +
                            </Button>
                            <Button className="mybutn2" onClick={decrement}>
                                Count -
                            </Button>
                            <span>{count}</span>
                            {/* 
                            <Button className="mybutn" onClick={handleUserCountPlus}>
                                User Count +
                            </Button>
                            <Button className="mybutn2" onClick={handleUserCountMinus}>
                                User Count -
                            </Button>
                            <span>User counter {countUser}</span> */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    )
}
