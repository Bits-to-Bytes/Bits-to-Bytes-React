import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import HomePage from './components/homepage/HomePage';
import NavBar from './components/navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="#home-page" component={HomePage}></Route>
        <HomePage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
