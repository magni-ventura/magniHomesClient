import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Header from "./components/Global-components/partials/Header";
import Footer from "./components/Global-components/partials/Footer";



export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignOut" element={<SignUp />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  )
}
