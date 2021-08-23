import React, { useState } from "react";
import "../css/body.css";
import Input from "./field";
import Textarea from "./textarea";

const Body = (props) => {
  const [state, setState] = useState({
    email: "",
    names: "",
    title: "",
    desc: "",
    post: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    let dataPushed = [
      {
        email: state.email,
        names: state.names,
        title: state.title,
        desc: state.desc,
      },
    ];
    // let arr = post.push(dataPushed);
    // setState({ post: dataPushed });
    props.onPost(dataPushed);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="container">
        <h5>Add Your Post</h5>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="two">
            <div className="fone">
              <b>Email</b>
              <br />
              <Input
                type="email"
                name="email"
                className="spacee"
                value={state.email}
                onChange={(e) => handleChange(e)}
                placeholder="Enter your email"
              />
            </div>
            <div className="ftwo">
              <b>Full name</b>
              <br />

              <Input
                name="names"
                value={state.names}
                placeholder="Full names"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="bfield">
            <b>Post Title</b>
            <br />
            <Input
              name="title"
              value={state.title}
              placeholder="Post Title"
              onChange={(e) => handleChange(e)}
            />

            <br />
            <b>Description</b>
            <br />

            <Textarea
              name="desc"
              placeholder="type here ...."
              value={state.desc}
              onChange={(e) => handleChange(e)}
            ></Textarea>
          </div>
          <div className="btn">
            <button type="submit"> Post</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Body;
