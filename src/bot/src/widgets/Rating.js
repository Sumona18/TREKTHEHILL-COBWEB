import Options from "./Options";

const Ratings = (props) => {
  const rating = [
    {
      name: "1",
      handler: props.actionProvider.handleMinor,
      id: 1
    },
    {
      name: "2",
      handler: props.actionProvider.handleMinor,
      id: 2
    },
    {
      name: "3",
      handler: props.actionProvider.handleMajor,
      id: 3
    },
    {
      name: "4",
      handler: props.actionProvider.handleMajor,
      id: 4
    },
    {
      name: "5",
      handler: props.actionProvider.handleMajor,
      id: 5
    }
  ];
  return <Options options={rating} {...props} />;
};

export default Ratings;
