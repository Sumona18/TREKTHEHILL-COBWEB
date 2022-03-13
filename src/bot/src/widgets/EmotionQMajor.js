import Options from "./Options";

const EmotionQMajor = (props) => {
  const query = [
    {
      name: "Yes",
      handler: props.actionProvider.handlePanicYes,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handleFriends,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default EmotionQMajor;
