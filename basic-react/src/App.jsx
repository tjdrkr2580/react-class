function App() {
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
    <Btn text="Save Changes"/>
    <Btn text="Continue"/>
    </>
  );
}

export default App;
