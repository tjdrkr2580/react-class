function App() {
    function Btn({text,big}) {
      console.log({text,big});
      return <button style={{
        backgroundColor: 'tomato',
        color: 'white',
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: big ? 16 : 12
      }}>{text}</button>
    }
  return (
    <>
    <Btn text="Save Changes" big={true}/>
    <Btn text="Continue" big={false}/>
    </>
  );
}

export default App;
