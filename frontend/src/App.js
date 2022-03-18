import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Profile from "./pages/Profile";
import LayoutUser from "./components/shared/LayoutUser";
import Contactform from "./pages/Contactform";
import Politics from "./pages/Politics";
import SocialCalculator from "./pages/calculator/SocialCalculator";
import Sunafil from "./pages/Sunafil";
import Tributos from "./pages/Tributos";
import Derechos from "./pages/Derechos";
import Explotacion from "./pages/Explotacion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home></Home>}></Route>
        </Route>
        <Route path="/" element={<Layout></Layout>}>
          <Route path="politics" element={<Politics />}></Route>
        </Route>
        <Route path="/register" element={<RegisterForm></RegisterForm>}></Route>
        <Route path="/login" element={<LoginForm></LoginForm>}></Route>
        <Route
          path="/calculators"
          element={<SocialCalculator></SocialCalculator>}
        />
        <Route path="/tools/sunafil" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Sunafil></Sunafil>} />
        </Route>
        <Route path="/tools/tributos" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Tributos></Tributos>} />
        </Route>
        <Route path="/tools/profile" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/tools/explotation" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Explotacion></Explotacion>}></Route>
        </Route>
        <Route path="/tools/Derechos" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Derechos></Derechos>}></Route>
        </Route>
        <Route path="/tools/calculators" element={<LayoutUser></LayoutUser>}>
          <Route index element={<SocialCalculator></SocialCalculator>}></Route>
        </Route>
        <Route path="/tools/consult" element={<LayoutUser></LayoutUser>}>
          <Route index element={<Contactform></Contactform>}></Route>
        </Route>
        <Route path="/contact" element={<Contactform></Contactform>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
