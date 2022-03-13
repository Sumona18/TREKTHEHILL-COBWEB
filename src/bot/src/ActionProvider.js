class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
    const message = this.createChatBotMessage(
      "Hey! Nice to meet you. So, how are you feeling today?",
      {
        // widget: "rating",
        // loading: true,
        // terminateLoading: true,
        // withAvatar: true
      }
    );

    this.addMessageToState(message);
  };
  handleHowAreYou = () => {
    const message = this.createChatBotMessage(
      "Times can be tough...We recommend you taking a mental test, would you like it?",
      // {
      //   widget: "rating",
      //   loading: true,
      //   terminateLoading: true,
      //   withAvatar: true
      // }
    );

    this.addMessageToState(message);
  };

  handleRating = () => {
    const message = this.createChatBotMessage(
      "Overall how would you rate your mental health on a scale of 1 to 5",
      {
        widget: "rating",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleMinor = () => {
    const message = this.createChatBotMessage(
      "Have you noticed any change in your diet habit?",
      {
        widget: "diethabit",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleSmoking = () => {
    const message = this.createChatBotMessage(
      "How often do you smoke/drink on a scale of 1 to 5?",
      {
        widget: "smoke",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleBipolar = () => {
    const message = this.createChatBotMessage(
      "Did you ever feel sad or low at the same time? ",
      {
        widget: "emotionQ",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };
  handleBipolarYes = () => {
    const message= this.createChatBotMessage(
      "I suspect you are undergoing a bipolar disorder. Check out the Bipolar zone in Calming section."
    );
    this.addMessageToState(message);
  }
  handleDepression = () => {
    const message= this.createChatBotMessage(
      "I suspect you are undergoing Depression. Check out the Depression zone in Calming section."
    );
    this.addMessageToState(message);
  }
  handleOCD = () => {
    const message= this.createChatBotMessage(
      "I suspect you are undergoing an Obsessive Compulsive Disorder. Check out the OCD zone in Calming section."
    );
    this.addMessageToState(message);
  }
  handlePanicYes = () => {
    const message= this.createChatBotMessage(
      "I suspect you are undergoing a Panic disorder. Check out the Panic zone in Calming section."
    );
    this.addMessageToState(message);
  }

  handlePanic = () => {
    const message = this.createChatBotMessage(
      "Are you afraid to start any new poject or does the thought of it terriies you?",
      {
        widget: "emotionQMajor",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleST = () => {
    const message = this.createChatBotMessage(
      "Have you ever got any Suicidal Thoughts?",
      {
        widget: "stq",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleDoc = () => {
    const message = this.createChatBotMessage(
      "You must consult a psychiatrist. You can go through the helpline number provided in our website or take an appointment as soon as possible."

    );

    this.addMessageToState(message);
  };

  handleMajor = () => {
    const message = this.createChatBotMessage(
      "During the past 4 weeks, have you had any problems with your daily life due to any emotional problem such as feeling depressed, sad or anxious?",
      {
        widget: "emprob",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleHappy = () => {
    const message = this.createChatBotMessage(
      "When was the last time you were really happy?",
      {
        widget: "happywid",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleMentalDisorder = () => {
    const message = this.createChatBotMessage(
      "Have you ever been diagnosed with a Mental Disorder before?",
      {
        widget: "mentaldisorderQ",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleFriends = () => {
    const message = this.createChatBotMessage("How many friends do you have?", {
      widget: "friend",
      loading: true,
      terminateLoading: true,
      withAvatar: true
    });

    this.addMessageToState(message);
  };

  handleTalk = () => {
    const message = this.createChatBotMessage(
      "Do talk to your friends. Open up about yourself. If problem still persits, come again for an appointment to a Psychiatrist."
    );

    this.addMessageToState(message);
  };

  handleHealth = () => {
    const message = this.createChatBotMessage("Checkout our website for healthier mental exercises.");

    this.addMessageToState(message);
  }

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and stay safe!");

    this.addMessageToState(message);
  };

  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "Thanks for Texting. You may head to 'Calming'- Our library for improving mental health",
      // {
      //   widget: "rating",
      //   loading: true,
      //   terminateLoading: true,
      //   withAvatar: true,
      //   ...options
      // }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
