import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/landing";
import Dashboard from "./pages/Dashboard/dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
