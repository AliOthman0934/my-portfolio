// import {BrowserRouter as Router , Switch, Route } from 'react-router-dom'
// import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';

// function App() {
//   return (
//     <div>
//       <Router>
//         <div className="noise"></div>
//         <div className="App">
//           <Switch>
//             <Route path='/' exact><Home/></Route>
//           </Switch>
//           <Switch>
//             <Route path='/about' exact><About/></Route>
//           </Switch>
//           <Switch>
//             <Route path='/projects' exact><Projects/></Route>
//           </Switch>
//           <Switch>
//             <Route path='/contact' exact><Contact/></Route>
//           </Switch>
//           <Switch>
//             <Route path='/' exact><Home/></Route>
//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          <ScrollToTop/>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
          <Switch>
            <Route path='/about' exact>
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path='/projects' exact>
              <Projects />
            </Route>
          </Switch>
          <Switch>
            <Route path='/contact' exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

