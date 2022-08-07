import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./router/Home";
import Detail from './router/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h1>Hello!</h1>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;