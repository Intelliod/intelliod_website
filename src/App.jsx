import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MBS from './layouts/MBS_dashborad.jsx';
import Towers from './layouts/Towers_dashboard.jsx';
import CV_dashboard from './layouts/CV_dashboard.jsx'
import Aadhya_dashboard from './layouts/Aadhya_dashboard.jsx';
import About from './components/About.jsx'; 


function App() {
  return (
    <>
   <Router>
     <Routes>
       <Route path="/" element={<MBS />} />
       <Route path="/towers_page" element={<Towers />} />
       <Route path="/cv_page" element={<CV_dashboard />} />
       <Route path="/aadhya_page" element={<Aadhya_dashboard/>} />
       <Route path="/about" element={<About />} />
     </Routes>
   </Router>
    </>
  )

}
export default App


