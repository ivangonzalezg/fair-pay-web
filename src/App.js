import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import HomePage from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
