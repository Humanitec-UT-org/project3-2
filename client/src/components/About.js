import React, { Component } from "react";
import Github from "./styleLogos/Github";
import Linkedin from "./styleLogos/LinkedIn";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="login">
          <div className="container-fluid">
            <div className="row no-gutter">
              {/* start */}
              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">Info</h3>
                        <div className="form-label-group">
                          <div className="container">
                            <u>context</u>

                            <div
                              id="scroll3"
                              className="cardScroll w-100 card-body"
                              data-mcs-theme="minimal-dark"
                              data-mcs-auto-hide-scrollbar="true"
                              style={{
                                backgroundColor: "transparent",
                                height: "300px"
                              }}
                              ref={a => (this._acc = a)}
                              onClick={this._handleClick}
                            >
                              {this.props.children}

                              <p>
                                Shopping, housing, mobility, food - each of us
                                produces CO2. <br />
                                Our diet produces to about 25% of our total
                                annual CO2 consumption. (Depending on the source
                                and consideration of various factors such as
                                production, transport and preparation of the
                                food, the value is 16-40%). <br />
                                The values per person vary between 1.4 - 2.5
                                tons per year. It depends on what we eat, where
                                we shop and where our food comes from. <br />
                                Research expects that with an &nbsp;
                                <u>
                                  annual food consumption of less than 1.5 tons
                                  of CO2 per year
                                </u>
                                , we can have a lasting effect on our climate.
                                <br />
                                This app has no claim to correctness. The
                                visualization in the profile takes{" "}
                                <u>1.5 kg as total quantity.</u> So 1/1000 of
                                the recommended annual quantity. The values of
                                single food items come from the research of
                                several sources and give only average scores.
                                Exact quantities are also not taken into
                                account.
                                <br />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}
              <div className="col-md-8 col-lg-6">
                <div className="login d-flex align-items-center py-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-9 col-lg-8 mx-auto">
                        <h3 className="login-heading mb-4">&nbsp;</h3>
                        <div className="form-label-group">
                          <div className="container">
                            <p>
                              <u>personal</u>
                            </p>
                            <div
                              id="scroll3"
                              className="cardScroll w-100 card-body"
                              data-mcs-theme="minimal-dark"
                              data-mcs-auto-hide-scrollbar="true"
                              style={{
                                backgroundColor: "transparent",
                                height: "200px"
                              }}
                              ref={a => (this._acc = a)}
                              onClick={this._handleClick}
                            >
                              {this.props.children}

                              <span>
                                This app was created as the final project of the
                                Ironhack Web Development Bootcamp. <br />
                                It is based on MERN stack. <br />
                                Person behind the scenes:
                                <br />
                                Chantal Herrmann <br />
                                <div className="row">
                                  <div className="col-2">
                                    <a
                                      href="https://github.com/ChantyHe90"
                                      style={{
                                        textDecoration: "none",
                                        color: "black"
                                      }}
                                    >
                                      <Github />
                                    </a>
                                  </div>
                                  <div className="col-sm">
                                    <a
                                      href="https://www.linkedin.com/in/chanty-herrmann-571836157/"
                                      style={{
                                        textDecoration: "none",
                                        color: "black"
                                      }}
                                    >
                                      <Linkedin />
                                    </a>
                                  </div>
                                </div>
                              </span>
                            </div>
                            <p>
                              <u>references</u>
                            </p>
                            <div
                              id="scroll3"
                              className="cardScroll w-100 card-body"
                              data-mcs-theme="minimal-dark"
                              data-mcs-auto-hide-scrollbar="true"
                              style={{
                                backgroundColor: "transparent",
                                height: "200px"
                              }}
                              ref={a => (this._acc = a)}
                              onClick={this._handleClick}
                            >
                              {this.props.children}

                              <p>
                                <a
                                  href="https://www.freepik.com/free-photos-vectors/background"
                                  style={{
                                    textDecoration: "none",
                                    color: "black"
                                  }}
                                >
                                  Background photo created by tirachard -
                                  <u>www.freepik.com</u>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
