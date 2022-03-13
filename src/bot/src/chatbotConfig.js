import { createChatBotMessage } from "react-chatbot-kit";
import Gender from "./widgets/Gender";
import Rating from "./widgets/Rating";
import DietHabit from "./widgets/DietHabit";
import Smoke from "./widgets/Smoke";
import EmotionQ from "./widgets/EmotionQ";
import STQ from "./widgets/STQ";
import Emprob from "./widgets/Emprob";
import Happywid from "./widgets/Happywid";
import Friends from "./widgets/Friends";
import MentalDisorderQ from "./widgets/MentalDisorderQ";
import EmotionQMajor from "./widgets/EmotionQMajor";
import CoBotAvatar from "./CoBotAvatar";

const botName = "The NerveGuru";

const config = {
  lang: "no",
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#B8FFF9",
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(`Hi! I'm ${botName}`),
    createChatBotMessage("Start by waving a hi to me",
    //  {
    //   withAvatar: true,
    //   delay: 400,
    //   widget: "gender"
    // }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "gender",
      widgetFunc: (props) => <Gender {...props} />
    },
    {
      widgetName: "rating",
      widgetFunc: (props) => <Rating {...props} />
    },
    {
      widgetName: "diethabit",
      widgetFunc: (props) => <DietHabit {...props} />
    },
    {
      widgetName: "smoke",
      widgetFunc: (props) => <Smoke {...props} />
    },
    {
      widgetName: "emotionQ",
      widgetFunc: (props) => <EmotionQ {...props} />
    },
    {
      widgetName: "stq",
      widgetFunc: (props) => <STQ {...props} />
    },
    {
      widgetName: "emprob",
      widgetFunc: (props) => <Emprob {...props} />
    },
    {
      widgetName: "happywid",
      widgetFunc: (props) => <Happywid {...props} />
    },
    {
      widgetName: "mentaldisorderQ",
      widgetFunc: (props) => <MentalDisorderQ {...props} />
    },
    {
      widgetName: "friend",
      widgetFunc: (props) => <Friends {...props} />
    },
    {
      widgetName: "emotionQMajor",
      widgetFunc: (props) => <EmotionQMajor {...props} />
    }
  ]
};

export default config;
