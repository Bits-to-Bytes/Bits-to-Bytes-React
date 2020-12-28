import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import MembershipPage from "./pages/membership/membership";


import MainWeb from "./main-web";
import RegistrationPage from "./pages/registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       
        <Route exact path="/" component={MainWeb} />
        <Route path="/membership" component={MembershipPage} />
        <Route path="/registration" component={RegistrationPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
