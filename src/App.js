import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import NavBar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage';
import EventPage from './components/eventpage/eventpage';
import VisionPage from './components/visionpage/visionpage';
import OppertunityPage from './components/oppertunitypage/oppertunitypage';
import TechPage from './components/techpage/techpage';
import TeamPage from './components/teampage/teampage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <Route exact path="#home-page" component={HomePage}></Route>
        <HomePage />
        <EventPage />
        <VisionPage />
        <OppertunityPage />
        <TechPage />
        <TeamPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
