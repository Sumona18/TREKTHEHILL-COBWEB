import Options from "./Options";

const Friends = (props) => {
  const query = [
    {
      name: "Few",
      handler: props.actionProvider.handleST,
      id: 1
    },
    {
      name: "Many",
      handler: props.actionProvider.handleTalk,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default Friends;
