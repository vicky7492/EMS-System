import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
      <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
