import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./features/RequireAuth";
import Register from "./components/Register";
import AdminHomePage from "./components/admin/AdminHomePage";
import Unauthorized from "./components/Unauthorized";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<RequireAuth admin={true} />}>
          <Route index element={<AdminHomePage />} />
        </Route>
        <Route path="/user" element={<RequireAuth user={true} />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
      <Toaster position="top-right" />
    </Router>
  );
};

export default App;
