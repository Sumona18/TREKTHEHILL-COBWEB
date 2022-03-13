import Options from "./Options";

const EmotionQ = (props) => {
  const query = [
    {
      name: "Yes",
      handler: props.actionProvider.handleBipolarYes,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handlePanic,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default EmotionQ;
