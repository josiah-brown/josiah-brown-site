import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import Error404 from "./routes/error_404/Error404";

export default function App() {
  return (
    <div className="-z-50 bg-white dark:bg-neutral-800">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Error404 />} />
          <Route path="/contact" element={<Error404 />} />
          <Route path="/art" element={<Error404 />} />
          <Route path="/blog" element={<Error404 />} />
        </Routes>
      </Router>
    </div>
  );
}
