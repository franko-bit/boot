import "../css/displayy.css";
const Display = (props) => {
  return (
    // <div className="containerr">
    <div className="one">
      {!(props.posts.length > 0)
        ? ""
        : props.posts.map((data, id) => (
            <div key={id}>
              <ul>
                <li>{data.email}</li>
                <li>{data.names}</li>
                <li>{data.title}</li>
                <li>{data.desc}</li>
              </ul>
            </div>
          ))}
    </div>
    // </div>
  );
};
export default Display;
