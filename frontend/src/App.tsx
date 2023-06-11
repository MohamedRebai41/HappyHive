import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Leaderboard from "./pages/Leaderboard";
import QrScanner from "./components/QrScanner";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="leaderboared" element={<Leaderboard />} />
          <Route path="qrscanner" element={<QrScanner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
