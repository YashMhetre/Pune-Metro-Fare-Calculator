import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PuneMetroCalculator from "./pages/PuneMetroCalculator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PuneMetroCalculator />} />
    </Routes>
  );
}

export default App;