import { Component } from "react";
import NavBar from "../../components/navbar/Navbar";
import "./Registration.css";

export default class RegistrationForm extends Component {
  render() {
    return (
      <div className="registration-page">
        <div className="sp-form-outer sp-force-hide">
          <div
            id="sp-form-172365"
            sp-id={172365}
            sp-hash="2f4e629ee860ca028495ae2f671b5455b496392656c61ab9b76eaf0b02f6a639"
            sp-lang="en"
            className="sp-form sp-form-regular sp-animation-scale-in sp-form-embed"
            sp-show-options="%7B%22satellite%22%3Afalse%2C%22maDomain%22%3A%22login.sendpulse.com%22%2C%22formsDomain%22%3A%22forms.sendpulse.com%22%2C%22condition%22%3A%22onButtonClick%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-right%22%2C%22animation%22%3A%22sp-animation-scale-in%22%2C%22hideOnMobile%22%3Afalse%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22show%22%2C%22clause%22%3A%22equal%22%2C%22token%22%3A%22%22%7D%5D%2C%22analytics%22%3A%7B%22ga%22%3A%7B%22eventLabel%22%3A%22React_JS_Webinar%22%2C%22send%22%3Afalse%7D%2C%22ym%22%3A%7B%22counterId%22%3Anull%2C%22eventLabel%22%3Anull%2C%22targetId%22%3Anull%2C%22send%22%3Afalse%7D%7D%2C%22utmEnable%22%3Afalse%7D"
          >
            <div className="sp-form-fields-wrapper">
              <div className="sp-message">
                <div />
              </div>
              <form
                noValidate
                className="sp-element-container ui-sortable ui-droppable "
              >
                <div
                  className="sp-field "
                  sp-id="sp-91b0afc8-b4e5-4b85-bce0-8135afcc11d2"
                >
                  <div style={{ fontFamily: "inherit", lineHeight: "1.2" }}>
                    <h1 className="form-title">Register</h1>
                  </div>
                </div>
                <div
                  className="sp-field "
                  sp-id="sp-ca1bd398-56fd-4c41-bc39-8df09bdcbdbc"
                >
                  <label className="sp-control-label">
                    <span>Name</span>
                    <strong>*</strong>
                  </label>
                  <input
                    type="text"
                    sp-type="name"
                    name="sform[MTI4MDk2]"
                    className="sp-form-control "
                    placeholder="Full name"
                    sp-tips="%7B%22required%22%3A%22Required%20field%22%7D"
                    required="required"
                  />
                </div>
                <div
                  className="sp-field "
                  sp-id="sp-46a116d5-1b59-429e-a076-4abcf1801779"
                >
                  <label className="sp-control-label">
                    <span>Email</span>
                    <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    sp-type="email"
                    name="sform[email]"
                    className="sp-form-control "
                    placeholder="username@xyz.com"
                    sp-tips="%7B%22required%22%3A%22Required%20field%22%2C%22wrong%22%3A%22Wrong%20email%22%7D"
                    required="required"
                  />
                </div>
                <div
                  className="sp-field "
                  sp-id="sp-aedd7275-b09b-4601-b1ee-a2709f8fa0c7"
                >
                  <label className="sp-control-label">
                    <span>College</span>
                  </label>
                  <input
                    type="text"
                    sp-type="input"
                    name="sform[MTI4MDkz]"
                    className="sp-form-control "
                    placeholder="GEC Bhavnagar"
                    sp-tips="%7B%22required%22%3A%22Required%20field%22%7D"
                  />
                </div>

                <div
                  className="sp-field sp-button-container "
                  sp-id="sp-897d0182-c5c4-4f0e-b21e-26b99c52370f"
                >
                  <button
                    id="sp-897d0182-c5c4-4f0e-b21e-26b99c52370f"
                    className="button"
                  >
                    Register{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
