import logo from './logo.png';
import './App.css';
import Button from './Button'
function sum(a, b) {
  alert ( a + b )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Jefferson Kadaj the best
           <h1>
             
             {sum(40, 60)}
             <Button onClick = {() =>{sum(40, 60)}} name = "Raising Information"/>
           </h1>
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
