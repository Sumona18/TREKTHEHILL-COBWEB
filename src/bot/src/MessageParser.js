class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (message.includes("hello") || message.includes("hi")) {
      return this.actionProvider.handleHello({ withAvatar: false });
    }

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleGender({ withAvatar: false });
    }
    if (
      message.includes("yes") ||
      message.includes("yeah") ||
      message.includes("yup")
    ) {
      return this.actionProvider.handleRating({ withAvatar: false });
    }
    if (
      message.includes("low") ||
      message.includes("sad") ||
      message.includes("bad") ||
      message.includes("tired") ||
      message.includes("unhappy") ||
      message.includes("suicid") ||
      message.includes("kill")||
      message.includes("not good")
    ) {
      return this.actionProvider.handleHowAreYou({ withAvatar: false });
    }

  

    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    return this.actionProvider.handleOptions({ withAvatar: false });
  }
}

export default MessageParser;
