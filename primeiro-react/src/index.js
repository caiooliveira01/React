import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);
