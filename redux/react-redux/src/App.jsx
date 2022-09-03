import "./App.css";
import Subscribers from "./components/Subscribers";
import { Provider } from "react-redux";
import store from "./redux/store";
import Display from "./components/Display";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Display />
      </div>
    </Provider>
  );
}

export default App;
