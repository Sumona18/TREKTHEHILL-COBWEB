import Options from "./Options";

const Genders = (props) => {
  const gender = [
    {
      name: "M",
      handler: props.actionProvider.handleRating,
      id: 1
    },
    {
      name: "F",
      handler: props.actionProvider.handleRating,
      id: 2
    }
  ];
  return <Options options={gender} {...props} />;
};

export default Genders;
