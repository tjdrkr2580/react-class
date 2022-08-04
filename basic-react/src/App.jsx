import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ''){
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    console.log(toDos);
  }

  return (
    <div>
      <h1>My Daily To Dos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} />
        <button>To Do!</button>
      </form>
      <ul>
        {
          toDos.map((item) => (<li>{item}</li>))
        }
      </ul>
    </div>
  );
}

export default App;