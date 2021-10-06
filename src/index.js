import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class App2 extends Component{
  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
  alterarCopo = () => {
    this.setState({
        copo: 'refrigerante'
    })
  }

  
  render(){
    const { clock, copo } = this.state
    return (
      <div>
          <h1>{clock}</h1>
          <button onClick = {() => this.alterarCopo()}>{copo}</button>
      </div>

    )
  
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
