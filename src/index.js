
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


class Appp extends React.Component {
  render() {
    return (
      <div>

        <App />

      </div>
    );
  }
}




ReactDOM.render(<div><Appp /></div>, document.querySelector('#root'));
