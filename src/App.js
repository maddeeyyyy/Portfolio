import './App.css';

import Home from './Home';
import About from './About.js';
import Qualification from './Qualification';
import StatisticsContactFooter from './StatisticsContactFooter.js';
import Header from './Navbar.js';
import Skills from './Skill.js';
import Project from './Projects.js';

function App() {
  return (
    <div>
    <Header />
    <Home />
    <About />
    <Qualification />
    <Skills />
    <Project />
    <StatisticsContactFooter />
  </div>
  );
}

export default App;
