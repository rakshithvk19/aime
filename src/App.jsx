import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing/Landing.jsx";
import DrillsLibrary from "./pages/DrillsLibrary/DrillsLibrary.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Training from "./pages/Training/Training.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Lesson from "./pages/Lesson/Lesson.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/drillsLibrary" element={<DrillsLibrary />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/training" element={<Training />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
