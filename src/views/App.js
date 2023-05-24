import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
//import Component from './Example/Component.js'
import ListToDo from './Example/Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <Navigation />



          {/* <Component /> */}


          <switch>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<ListToDo />} />
              <Route path="/about" element={< MyComponent />} />

            </Routes>
          </switch>


        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
