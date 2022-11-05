import { Route, Routes } from "react-router-dom";
import Greetings from "./components/greeting";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  </>
  );
}

export default App;
