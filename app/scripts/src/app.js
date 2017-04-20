class ChatApp {
  constructor() {
    console.log('Hello ES6!');

  }
}

// not part of assignment 9 ..
class ChatMessage {
  constructor({
    message: m,
    user: u = 'batman',
    timestamp: t = (new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    };
  }

}


export default ChatApp;
