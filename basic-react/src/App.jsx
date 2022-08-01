import { useEffect, useState } from 'react';

const Hello = () => {
  const byfn = () => {
    console.log("bye :(");
  }
  const hifn = () => {
    console.log("hi :)");
    return byfn
  }
  useEffect(hifn,[]);
  return <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing(!showing);
  return (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
