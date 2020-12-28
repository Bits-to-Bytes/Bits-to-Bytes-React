import { Component } from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Registration.css";

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      clgName: null,
      email: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="registration-page">
        <NavBar navBarItems={[]} />
        <iframe
          className="form"
          src="https://miten3377.typeform.com/to/IIxoLbTv"
          frameBorder="0"
          title="registration"
        ></iframe>
      </div>
    );
  }
}
