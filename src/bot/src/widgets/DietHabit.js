import Options from "./Options";

const DietHabit = (props) => {
  const habit = [
    {
      name: "Yes",
      handler: props.actionProvider.handleDepression,
      id: 1
    },
    {
      name: "No",
      handler: props.actionProvider.handleSmoking,
      id: 2
    }
  ];
  return <Options options={habit} {...props} />;
};

export default DietHabit;
