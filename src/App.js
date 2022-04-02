import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./views/Layout";
import TitleScreen from "./views/TitleScreen";
import About from "./views/About";
import LoginHost from "./views/LoginHost";
import LoginRefugee from "./views/LoginRefugee";
import Dashboard from "./views/Dashboard";
import GuestList from "./views/GuestList";
import NotFound from "./views/NotFound";
import CreateGuestAccount from "./views/CreateGuestAccount";
import BecomeHost from "./views/BecomeHost";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="login-host" element={<LoginHost/>} />
          <Route path="login-guest" element={<LoginRefugee />} />
          <Route path="create-guest-account" element={<CreateGuestAccount />} />
          <Route path="become-host" element={<BecomeHost />} />
          <Route path="dashboard" element={<Dashboard />}/>
          <Route path="guest-list" element={<GuestList />} />
          <Route path="" element={<TitleScreen />} />
        </Route>
        <Route path="*" element={<NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
