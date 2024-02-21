import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 z-0">
        <div className="bg-hero-pattern! bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
