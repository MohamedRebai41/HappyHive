import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Leaderboard from "./pages/Leaderboard";
import Store from "./pages/Store";
import QrScanner from "./components/QrScanner";
import Gift from "./components/Gift";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="store" element={<Store />} />
          <Route path="leaderboared" element={<Leaderboard />} />
          <Route path="qrscanner" element={<QrScanner />} />
          <Route path="gift" element={<Gift/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
