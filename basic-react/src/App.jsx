import { useState } from "react";

function App() {
  const [value,setValue] = useState("Save Changes");
    function Btn({text, fontSize}) {
      return <button style={{
        backgroundColor: 'tomato',
        color: 'white',
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize,
      }}>{text}</button>
    }
  return (
    <div>
    <Btn text={value} fontSize={18}/>
    </div>
  );
}

export default App;
