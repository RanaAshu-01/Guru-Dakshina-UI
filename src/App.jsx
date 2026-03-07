import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import Landing from "./Pages/LandingPage";
import Document1 from "./Pages/Document1";
import DashBorard from "./Pages/Dashboard";
import Document2 from "./Pages/Document2";
import Document3 from "./Pages/Document3";
import Document4 from "./Pages/Document4";
import Document5 from "./Pages/Document5";

const App = () => {
  return (
    <Routes>
      <Route path="/"  element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/documentation" element={<Document1 />} />
      <Route path="/personal details" element={<Document2 />} />
      <Route path="/education qualification" element={<Document3 />} />
      <Route path="/bank details" element={<Document4 />} />
      <Route path="/document upload" element={<Document5 />} />
      <Route path="/Dashboard" element={<DashBorard />} />
    </Routes>
  )
}

export default App
