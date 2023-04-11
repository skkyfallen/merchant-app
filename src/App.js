import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Nav/Navbar";
import MerchantDashboard from "./Pages/MerchantDashboard";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import SignUp from "./Components/Access Control/SignUp";
import SetPassword from "./Components/Access Control/SetPassword";
import Login from "./Components/Access Control/Login";
import UploadDocs from "./Components/Access Control/UploadDocs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/shop"></Route>
          <Route path="/history"></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<MerchantDashboard />} />
          <Route path="/setpassword" element={<SetPassword />} />
          <Route path="/uploaddocs" element={<UploadDocs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
