import Options from "./Options";

const Happywid = (props) => {
  const query = [
    {
      name: "Recently",
      handler: props.actionProvider.handleFriends,
      id: 1
    },
    {
      name: "More than a month ago",
      handler: props.actionProvider.handleMentalDisorder,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default Happywid;
