import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { NativeBaseProvider } from "native-base";
import routes from "./routes";
import HomePage from "./pages/home";

function App() {
  return (
    <NativeBaseProvider>
      <BrowserRouter>
        <Routes>
          <Route path={routes.home} element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </NativeBaseProvider>
  );
}

export default App;
