import React, { Component } from "react";
import { Router, Link, Route } from "react-router-dom";
//import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
//import firebase from "firebase";
//import "./App.css";
//import { Router, Link, Route } from "react-router-dom";
import Chat from "./chat";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "",
      // messages: [],
      user: "user1",
      sendUser: ""
    };
  }
  componentDidMount() {}
  handleChat = key => {
    this.setState({ user: key });
  };
  render() {
    return (
      <div id="skypeChat" classNameName="bg-dark p-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-3 bg-light">
              <div id="chatList">
                <div className="row align-items-center mt-md-2">
                  <div className="col-10">
                    <div id="userHeader">
                      <div
                        id="userDP"
                        className="img-fluid rounded-circle mt-1 mb-1"
                      >
                        UN{" "}
                      </div>
                      <h3 className="text-dark mb-0">User Name</h3>
                    </div>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-icon">
                      <i className="far fa-file-alt file-icon " />
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-2 mb-2">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search User"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                          <i className="fas fa-search" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mt-2 mb-2">
                    <div className="row">
                      <div className="col-2">
                        <button className="btn btn-icon">
                          <i className="fas fa-comments" />
                        </button>
                      </div>

                      <div className="col-2">
                        <button className="btn btn-icon">
                          <i className="far fa-address-book" />
                        </button>
                      </div>

                      <div className="col-8 text-right">
                        <button className="btn btn-icon">
                          <i className="fas fa-bell" />
                        </button>
                      </div>

                      <div className="col-12 mt-1">
                        <div className="d-block border-bottom border-info" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 mb-2">
                    <div id="tab-lists">
                      <div className="row">
                        <div className="col-12">
                          <div
                            className="list-group"
                            id="list-tab"
                            role="tablist"
                          >
                            <a
                              className="list-group-item list-group-item-action active"
                              id="list-recent-list"
                              data-toggle="list"
                              href="#list-recent"
                              role="tab"
                              aria-controls="recent"
                            >
                              Recent
                            </a>
                            <a
                              className="list-group-item list-group-item-action"
                              id="list-all-list"
                              data-toggle="list"
                              href="#list-all"
                              role="tab"
                              aria-controls="all"
                            >
                              All
                            </a>
                            <a href="#" className="btn btn-icon">
                              <i className="fas fa-user-plus" />
                            </a>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="tab-content" id="nav-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="list-recent"
                              role="tabpanel"
                              aria-labelledby="list-recent-list"
                            >
                              <div className="list-group userList">
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">ABZ</div>
                                    <div className="status status-online" />
                                  </div>
                                  <button
                                    onClick={this.handleChat.bind(
                                      this,
                                      "user1"
                                    )}
                                  >
                                    {" "}
                                    User Name 1{" "}
                                  </button>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-online" />
                                  </div>
                                  <button
                                    onClick={this.handleChat.bind(
                                      this,
                                      "user2"
                                    )}
                                  >
                                    {" "}
                                    User Name 2{" "}
                                  </button>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-offline" />
                                  </div>
                                  <button
                                    onClick={this.handleChat.bind(
                                      this,
                                      "user3"
                                    )}
                                  >
                                    {" "}
                                    User Name 3{" "}
                                  </button>
                                </a>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="list-all"
                              role="tabpanel"
                              aria-labelledby="list-all-list"
                            >
                              <div className="list-group userList">
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-online" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-online" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-offline" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>

                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-away" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status status-away" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>
                                <a href="#" className="list-group-item">
                                  <div className="userDP">
                                    <div className="DP mt-1 mb-1">AB</div>
                                    <div className="status" />
                                  </div>
                                  <h5>User Name</h5>
                                </a>
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

            <div className="col-12 col-md-9 bg-white">
              <div className="container-fix">
                <div id="chatWindow">
                  <div className="top-bar">
                    <div className="row">
                      <div className="col-5 col-md-9 col-xs-5">
                        <div className="chat-with-user-name">
                          <h3>
                            Chat With: <span>jarrar Ahmed</span>
                          </h3>
                        </div>
                      </div>
                      <div className="col-2 col-md-1 col-xs-2">
                        <button className="btn btn-icon pt-3">
                          <i className="fas fa-download" />
                        </button>
                      </div>
                      <div className="col-2 col-md-1 col-xs-2">
                        <button className="btn btn-icon pt-3">
                          <i className="fas fa-user-plus" />
                        </button>
                      </div>
                      <div className="col-3 col-md-1 col-xs-3">
                        <button className="btn btn-icon pt-3">
                          <i className="fas fa-trash-alt" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <select
                      onChange={event =>
                        this.setState({ sendUser: event.target.value })
                      }
                      className="form-control"
                    >
                      <option value="user1">User1</option>
                      <option value="user2">User2</option>
                      <option value="user3">User3</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-9 bg-white">
                    <Chat
                      user={this.state.user}
                      sendUser={this.state.sendUser}
                    />
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

export default Home;
