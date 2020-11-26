import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';
import MembershipPage from './components/membership/membership';

import NavBar from './components/navbar/Navbar';
import MainWeb from './main-web';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={MainWeb} />
        <Route path="/membership" component={MembershipPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
