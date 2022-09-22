import React from 'react';
import Layout from './components/UI/Layout/Layout';
import { Route, Routes  } from "react-router-dom";
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {

  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
