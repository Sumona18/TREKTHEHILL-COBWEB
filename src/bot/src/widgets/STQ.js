import Options from "./Options";

const STQ = (props) => {
  const query = [
    {
      name: "Yes",
      handler: props.actionProvider.handleDoc,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handleHealth,
      id: 2
    }
  ];
  return <Options options={query} {...props} />;
};

export default STQ;
