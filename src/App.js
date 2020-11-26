import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/navbar/Navbar';
import MainWeb from './main-web';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={MainWeb} />
      </div>
    </BrowserRouter>
  );
}

export default App;
