import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login"
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./features/RequireAuth"
import Register from "./components/Register";
import { DefaultSidebar } from "./components/SideBar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/sidebar" element={<DefaultSidebar/>}/>
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
