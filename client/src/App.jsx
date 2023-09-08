import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login"
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./features/RequireAuth"
import Register from "./components/Register";
import AdminHomePage from "./pages/AdminHomePage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/adminHomepage" element={<AdminHomePage/>}/>
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
