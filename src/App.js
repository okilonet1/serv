import logo from './asvaserver.png';
import {FaDownload} from 'react-icons/fa';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download <code>import.pdf</code>.
        </p>
        <a
          className="App-link"
          href="/assets/import.pdf"
          target="_blank"
          download
        >
        <FaDownload/>
        </a>
      </header>
    </div>
  );
}

export default App;
