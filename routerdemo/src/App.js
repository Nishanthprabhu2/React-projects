import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import PageNotFound from "./Pages/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <div
          style={{
            width: 100 + "vw",
            height: 80,
            backgroundColor: "lightblue",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/project">Projects</Link>
          <Link to="/about">About</Link>
        </div>

        <Routes>
          <Route path="/:name" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/project" exact element={<Project />} />
          <Route path="*" exact element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
