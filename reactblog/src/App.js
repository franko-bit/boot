import "./App.css";
import { useState } from "react";
import Header from "../src/components/header.js";
import Body from "../src/components/body.js";
import Display from "../src/components/display.js";
import Footer from "../src/components/footer.js";
function App() {
  const [state, setState] = useState({
    post: [],
  });

  const onPost = (post) => {
    return setState({ ...state, post: post });
  };

  return (
    <div className="App">
      <Header />
      <Body onPost={onPost} />
      {state.post.length > 0 ? <Display posts={state.post} /> : ""}
      <Footer />
    </div>
  );
}

export default App;
