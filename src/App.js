import React from 'react';
import MyNav from './Components/Nav';
import Home from './Components/Home';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Contact from './Components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <MyNav/>
      <Home/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <FAQ/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
