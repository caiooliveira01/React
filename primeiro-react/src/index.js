import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './style.css'

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Main />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);