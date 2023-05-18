import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
// import Component from './Example/Component.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Liem from MASTER Chau
        </p>

        < MyComponent />
        {/* <Component /> */}
      </header>
    </div>
  );
}

export default App;
