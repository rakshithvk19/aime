import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import Drill from "./pages/Drill/Drill.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Training from "./pages/Training/Training.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/drill" element={<Drill />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/training" element={<Training />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
