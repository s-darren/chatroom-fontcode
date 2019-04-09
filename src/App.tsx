import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import { Pagination } from 'antd';
// import 'antd/dist/antd.css';
// import { Button } from 'antd';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* <Button type="primary">Button</Button> */}
          <Pagination defaultCurrent={6} total={500} />
        </header>
      </div>
    );
  }
}

export default App;
