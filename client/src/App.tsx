import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import './styles/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js as well
// import React from 'react';

function App() {
  // TODO: Use Contexting to return the user either the login page or Outlet depending if they're logged in or not
  // TODO: Use contexting to change the website theme based on user preference

  return (
    <div className='theme-dark'>
      <Header />
      <main>
        {/* Renders the matched route component */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
