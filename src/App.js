import "./App.css";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "./components/ProfilePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profilepage/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
