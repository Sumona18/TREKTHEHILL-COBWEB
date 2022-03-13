import Options from "./Options";

const MentalDisorderQ = (props) => {
  const query = [
    {
      name: "Yes",
      handler: props.actionProvider.handleFriends,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handleBipolar,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default MentalDisorderQ;
