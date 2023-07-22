import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import TailwindTest from "./TailwindTest";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<TailwindTest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
