import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import ProjectInfo from "./routes/project_info/ProjectInfo";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Error404 from "./routes/error_404/Error404";

export default function App() {
  return (
    <div className="-z-50 bg-white dark:bg-neutral-800">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectTitle" element={<ProjectInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/art" element={<Error404 />} />
          <Route path="/blog" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}
