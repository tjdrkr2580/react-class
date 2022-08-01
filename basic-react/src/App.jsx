import { useEffect, useState } from 'react';

function App() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setValue((prev)=> prev + 1);
    const onChange = (e) => setKeyword(e.target.value);
    console.log("i run all the time");
    useEffect(()=>{
      console.log("run now, couter keyword");
    },[keyword,counter]);
  return (
    <div>
        <input type="text" value={keyword} onChange={onChange} placeholder='Search Here...' />
        <h1>{counter}</h1>
        <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
