import { useState } from "react";

function App() {
  const [value,setValue] = useState("Save Changes");
    function Btn({text}) {
      console.log({text});
      return <button style={{
        backgroundColor: 'tomato',
        color: 'white',
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}>{text}</button>
    }
  return (
    <>
    <Btn text={value}/>
    </>
  );
}

export default App;
