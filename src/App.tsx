import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/*" element={<Main />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
