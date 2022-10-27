import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Home from "./pages/Home";
import Page2 from "./pages/Page2";
import { CounterProvider } from "./context/Counter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <CounterProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;
