import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={ <Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
