import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "./views/Layout";
import TitleScreen from "./views/TitleScreen";
import About from "./views/About";
import LoginHost from "./views/LoginHost";
import LoginRefugee from "./views/LoginRefugee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="login-host" element={<LoginHost/>} />
          <Route path="login-guest" element={<LoginRefugee />} />
          <Route path="" element={<TitleScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
