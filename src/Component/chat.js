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
      messages2: [],
      messages3: [],
      user: props.user,
      sendUser: props.sendUser
    };
  }
  componentWillMount() {
    //alert(this.state.user);
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
      let newMessagesuser1 = [];
      let newMessagesuser2 = [];
      let newMessagesuser3 = [];
      var value = snapshot.val();
      //console.log(value.user);
      if (user === "user1") {
        for (var keys in value) {
          if (
            value[keys]["user"] === user ||
            value[keys]["sendUser"] === user
          ) {
            newMessagesuser1.push(value[keys]["text"]);
          }
        }
      }
      if (user === "user2") {
        for (var keys in value) {
          if (
            value[keys]["user"] === user ||
            value[keys]["sendUser"] === user
          ) {
            newMessagesuser2.push(value[keys]["text"]);
          }
        }
      }
      if (user === "user3") {
        for (var keys in value) {
          if (
            value[keys]["user"] === user ||
            value[keys]["sendUser"] === user
          ) {
            newMessagesuser3.push(value[keys]["text"]);
          }
        }
      }
      //console.log(newMessages);
      this.setState({
        messages: newMessagesuser1,
        messages2: newMessagesuser2,
        messages3: newMessagesuser3
      });
    });
  };

  renderMessages = () => {
    //console.log(this.state.messages);
    return this.state.messages.map((message1, index) => (
      <ListItem key={index}>
        <ListItemText style={{ wordBreak: "break-word" }} primary={message1} />
      </ListItem>
    ));
  };
  renderMessages2 = () => {
    //console.log(this.state.messages);
    return this.state.messages2.map((message2, index) => (
      <ListItem key={index}>
        <ListItemText style={{ wordBreak: "break-word" }} primary={message2} />
      </ListItem>
    ));
  };
  renderMessages3 = () => {
    //console.log(this.state.messages);
    return this.state.messages3.map((message3, index) => (
      <ListItem key={index}>
        <ListItemText style={{ wordBreak: "break-word" }} primary={message3} />
      </ListItem>
    ));
  };

  render() {
    return (
      <div className="App">
        <List>{this.renderMessages()}</List>
        <List>{this.renderMessages2()}</List>
        <List>{this.renderMessages3()}</List>
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
