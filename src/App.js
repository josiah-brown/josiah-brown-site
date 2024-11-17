import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Projects from "./routes/projects/Projects";
import ProjectInfo from "./routes/project_info/ProjectInfo";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Error404 from "./routes/error_404/Error404";
import LinkdTermsAndConditions from "./routes/linkd/LinkdTermsAndConditions";
import LinkdPrivacyPolicy from "./routes/linkd/LinkdPrivacyPolicy";

export default function App() {
  return (
    <div className="-z-50 bg-white dark:bg-neutral-800">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:project" element={<ProjectInfo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/linkd-terms-and-conditions" element={<LinkdTermsAndConditions />} />
          <Route path="/linkd-privacy-policy" element={<LinkdPrivacyPolicy />} />
          <Route path="/art" element={<Error404 />} />
          <Route path="/blog" element={<Error404 />} />
          <Route path="/linkd-privacy-policy" element={<LinkdPrivacyPolicy />} />
          <Route path="/linkd-terms-and-conditions" element={<LinkdTermsAndConditions />} />
        </Routes>
      </Router>
    </div>
  );
}
