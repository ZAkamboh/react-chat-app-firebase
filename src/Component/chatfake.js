import React, { Component } from "react";
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";
import firebase from "firebase";
//import "./App.css";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      messages: [],
      user: props.user,
      sendUser: props.sendUser
    };
  }
  componentWillMount() {
    this.getMessages(this.state.user);
    //console.log(this.state.user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.user) {
      this.getMessages(nextProps.user);
      this.setState({ user: nextProps.user });
    }
    if (nextProps && nextProps.sendUser) {
      this.setState({ sendUser: nextProps.sendUser });
    }
  }
  onSubmit = event => {
    if (event.charCode === 13 && this.state.text.trim() !== "") {
      this.writeMessageToDB(this.state.text);
      this.setState({ text: "" });
    }
  };

  writeMessageToDB = message => {
    firebase
      .database()
      .ref("messages/")
      .push({
        text: message,
        user: this.state.user,
        sendUser: this.state.sendUser
      });
  };

  getMessages = user => {
    var messagesDB = firebase
      .database()
      .ref("messages/")
      .limitToLast(500);
    messagesDB.on("value", snapshot => {
      let newMessages = [];
      var value = snapshot.val();
      //console.log(value.user);
      for (var keys in value) {
        if (value[keys]["user"] === user || value[keys]["sendUser"] === user) {
          newMessages.push(value[keys]["text"]);
        }
      }
      //console.log(newMessages);
      this.setState({ messages: newMessages });
    });
  };

  renderMessages = () => {
    return this.state.messages.map((message, index) => (
      <ListItem key={index}>
        <ListItemText style={{ wordBreak: "break-word" }} primary={message} />
      </ListItem>
    ));
  };

  render() {
    return (
      <div className="App">
        <List>{this.renderMessages()}</List>
        <TextField
          autoFocus={true}
          multiline={true}
          rowsMax={3}
          style={{ width: "10px" }}
          placeholder="Type something.."
          onChange={event => this.setState({ text: event.target.value })}
          value={this.state.text}
          onKeyPress={this.onSubmit}
          style={{ width: "98vw", overflow: "hidden" }}
          // disabled={
          //   this.state.user === this.state.sendUser ||
          //   this.state.sendUser === ""
          //     ? true
          //     : false
          // }
        />
        <span ref={el => (this.bottomSpan = el)} />
      </div>
    );
  }
}

export default Chat;
