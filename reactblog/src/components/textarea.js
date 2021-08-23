const Textarea = (props) => {
  return (
    <textarea
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};
export default Textarea;
