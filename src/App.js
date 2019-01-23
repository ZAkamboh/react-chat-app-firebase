import React, { Component } from "react";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
import firebase from "firebase";
import "./App.css";
import createBrowserHistory from "history/createBrowserHistory";
import { Router, Link, Route } from "react-router-dom";
import Home from "./Component/home";
// import Userone from "./Component/user1";
import Chat from "./Component/chat";
// import Userthree from "./Component/user3";

const customHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // text: "",
      // messages: []
    };
  }
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDEgR90WTpQxTjaKpy4YaTkS8djGSz135g",
      authDomain: "attribechatapp.firebaseapp.com",
      databaseURL: "https://attribechatapp.firebaseio.com",
      projectId: "attribechatapp",
      storageBucket: "attribechatapp.appspot.com",
      messagingSenderId: "875522707605"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <Router history={customHistory}>
          <div>
            <Route exact path="/" component={Home} />
            {/* <Route path="/userone" component={Userone} /> */}
            <Route path="/chat" component={Chat} />
            {/* <Route path="/userthree" component={Userthree} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
