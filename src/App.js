import DetailPage from "./Components/DetailPage";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailPage />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Bad Request</h1>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
