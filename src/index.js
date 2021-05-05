
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


class Appp extends React.Component {
  render() {
    return (
      <div>
        <h1>hello from index</h1>
        <App />

      </div>
    );
  }
}




ReactDOM.render(<div><Appp /></div>, document.querySelector('#root'));
