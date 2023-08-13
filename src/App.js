import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Layout from './components/Layout';
import Body from './components/Body';
import Footer from './components/Footer';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Contact from './components/Contact';
import Login from './components/Login';
import Reg from './components/Reg';
import Product from './components/Product';
import Single from './components/Single';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="header" element={<Header />} />
            <Route path="body" element={<Body />} />
            <Route path="footer" element={<Footer />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="reg" element={<Reg />} />
            <Route path="product" element={<Product />} />
            <Route path="/single/:id" element={<Single/>} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
