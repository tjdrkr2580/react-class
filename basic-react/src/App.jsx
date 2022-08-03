import {useState} from 'react';

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setTodos] = useState([]);

    const onChange = (e) => {
        setToDo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === '') {
            return;
        }
        setTodos((currentArray) => [toDo, ...currentArray])
        setToDo("");
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>My To Dos ({toDos.length})</h1>
            <input type="text" onChange={onChange} value={toDo}/>
            <button>Add To Do</button>
        </form>
    );
}

export default App;
