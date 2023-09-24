import React from 'react';
import { Routes,Route} from 'react-router-dom';
import About from '../Pages/About';
import Home from './../Pages/Home';
import User from './../Pages/User';
import Contact from './../Pages/Contact';
import Report from './../Pages/Report';
import Information from './../Pages/User';

const PageContent = () => {
  return (
    
    <React.Fragment>
      <section>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/report" element={<Report />} />
        <Route path="/information" element={<Information />} />

        </Routes>
      </section>
    </React.Fragment>
  );
}

export default PageContent;
