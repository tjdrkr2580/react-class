import { useState } from "react";

function App() {
  const [value,setValue] = useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
    function Btn({text,changeValue}) {
      console.log({text});
      return <button onClick={changeValue} style={{
        backgroundColor: 'tomato',
        color: 'white',
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}>{text}</button>
    }
  return (
    <>
    <Btn text={value} changeValue={changeValue}/>
    <Btn text="Continue"/>
    </>
  );
}

export default App;
