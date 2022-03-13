import Options from "./Options";

const Emprob = (props) => {
  const query = [
    {
      name: "Yes",
      handler: props.actionProvider.handleHappy,
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

export default Emprob;
