import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import SearchUsers from "./pages/SearchUsers";
import SingleUser from "./pages/SingleUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/searchFriends" element={<SearchUsers />} />
        <Route path="/searchFriends/:id" element={<SingleUser />} />
      </Routes>
    </Router>
  );
}

export default App;
