import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Components/TodoList/Todo';
import DisplayTodo from './Components/TodoList/DisplayTodo';

function App() {
  return (
    <div className="App">
      <Home />
      <Todo />
      <DisplayTodo />
    </div>
  );
}

export default App;
