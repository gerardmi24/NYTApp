import logo from './logo.svg';
import './App.css';
//fetch link = https://api.nytimes.com/svc/mostpopular/v2//viewed/1.json?api-key=ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW
//key = ZXCxmhbJ9Rz57nPvmCMq4rpiRT9C7zXW



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
