import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import EventPage from './components/eventpage/eventpage';
import VisionPage from './components/visionpage/visionpage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="#home-page" component={HomePage}></Route>
        <HomePage />
        <EventPage />
        <VisionPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
