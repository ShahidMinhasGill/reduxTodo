import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Components/TodoList/Todo';
import DisplayTodo from './Components/TodoList/DisplayTodo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SecondPage from './Components/secondPage/SecondPage';
function App() {
  return (
    <div className="App">
      {/* <Home />
      <Todo />
      <DisplayTodo /> */}
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add/todo" element={<Todo />} />
            <Route path="/SecondPage" element={<SecondPage />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
