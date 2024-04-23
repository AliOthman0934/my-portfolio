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


// import React,{useEffect,useRef} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import gsap from 'gsap';


// function App() {
//   let cursor = useRef(null);
//   let posX1 = useRef(0);
//   let posY1 = useRef(0);
//   let mouseX1 = useRef(0);
//   let mouseY1 = useRef(0);

//   let tl = gsap.timeline();
//   let tl2 = gsap.timeline();

//   useEffect(() => {
//     let posX = posX1.current;
//     let posY = posY1.current;
//     let mouseX = mouseX1.current;
//     let mouseY = mouseY1.current;
  
//     tl.to({}, 0.016, {
//       repeat: -1,
//       onRepeat: function () {
//         posX += (mouseX - posX) / 10;
//         posY += (mouseY - posY) / 10;
//         tl.set(cursor.current, {
//           css: {
//             left: posX - 50,
//             top: posY - 50,
//           },
//         });
//       },
//     });
  
//     document.addEventListener("mousemove", function (e) {
//       mouseX = e.pageX;
//       mouseY = e.pageY;
//     });
  
//     tl2.from(cursor.current, {
//       delay: 2,
//       opacity: 0.4
//     }, "-=1");
//   },[tl,tl2,cursor]); 
  
//   const load = gsap.timeline({
//     paused:"true"
//   })

//   let loader =useRef(null);
//   let percent =useRef(null);
//   let bar = useRef(null);
//   let barc = useRef(null);
//   let progress = useRef(null);

//   useEffect(()=>{
//     load.to([progress , bar],{
//       duration: 0.2 ,
//       opacity: 0 ,
//       zIndex: -1
//     })

//     load.to(progress ,{
//       duration:0.8,
//       width: "0%"
//     })

//     load.to(loader,{
//       visibility:"hidden",
//       zIndex: -1
//     })
//   })

//   var id;
//   var width1;
//   function loading(){
//     id =setInterval(frame,20);
//   }
//   function frame(){
//     if(width1 > 100 ){
//       clearInterval(id)
//       load.play();
//     } else{
//       width1 ++
//       document.getElementById("barc").style.width = width1 + "%"
//       document.getElementById("percent").innerHTML = width1 + "%"
//     }
//   }

//   window.addEventListener("load",(e)=>{
//     loading();
//   })
//   return (
//     <div>
//       <Router>
//         <div className="noise"></div>
//         <div className="App">
//           <div className='loader' ref={loader}>
//             <div className='progress' id='percent' ref={progress}>
//               <div className='percent' id='percent' ref={percent}>
//                 1%
//               </div>
//               <div className='bar' id='bar' ref={bar}>
//                 <div className='barc' id='brac' ref={ barc}></div>
//               </div>
//             </div>
//           </div>
//           <ScrollToTop/>
//           <Switch>
//             <Route path='/' exact>
//               <Home />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/about' exact>
//               <About />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/projects' exact>
//               <Projects />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/contact' exact>
//               <Contact />
//             </Route>
//           </Switch>
//           <div className='cursor-follower' ref={cursor}></div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useRef } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import gsap from 'gsap';

// function App() {
//   let cursor = useRef(null);
//   let posX1 = useRef(0);
//   let posY1 = useRef(0);
//   let mouseX1 = useRef(0);
//   let mouseY1 = useRef(0);

//   let tl = gsap.timeline();
//   let tl2 = gsap.timeline();

//   useEffect(() => {
//     let posX = posX1.current;
//     let posY = posY1.current;
//     let mouseX = mouseX1.current;
//     let mouseY = mouseY1.current;

//     tl.to({}, 0.016, {
//       repeat: -1,
//       onRepeat: function () {
//         posX += (mouseX - posX) / 10;
//         posY += (mouseY - posY) / 10;
//         tl.set(cursor.current, {
//           css: {
//             left: posX - 50,
//             top: posY - 50,
//           },
//         });
//       },
//     });

//     document.addEventListener('mousemove', function (e) {
//       mouseX = e.pageX;
//       mouseY = e.pageY;
//     });

//     tl2.from(cursor.current, {
//       delay: 2,
//       opacity: 0.4,
//     }, '-=1');
//   }, [cursor]);

//   const load = useRef(gsap.timeline({ paused: true }));

//   let loader = useRef(null);
//   let progress = useRef(null);
//   let bar = useRef(null);
//   let barc = useRef(null);

//   useEffect(() => {
//     load.current.to([progress.current, bar.current], {
//       duration: 0.2,
//       opacity: 0,
//       zIndex: -1,
//     });

//     load.current.to(progress.current, {
//       duration: 0.8,
//       width: '0%',
//     });

//     load.current.to(loader.current, {
//       visibility: 'hidden',
//       zIndex: -1,
//     });
//   }, []);

//   let width1 = 0;
//   var id;

//   function loading() {
//     id = setInterval(frame, 20);
//   }

//   function frame() {
//     if (progress.current) {
//       if (width1 >= 100) {
//         clearInterval(id);
//         load.current.play();
//       } else {
//         width1++;
//         progress.current.style.width = width1 + '%';
//         progress.current.innerHTML = width1 + '%';
//       }
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('load', (e) => {
//       loading();
//     });
//   }, []);

//   return (
//     <div>
//       <Router>
//         <div className="noise"></div>
//         <div className="App">
//           <div className='loader' ref={loader}>
//             <div className='progress' ref={progress}>
//               <div className='percent' ref={}>
//                 1%
//               </div>
//               <div className='bar' ref={bar}>
//                 <div className='barc' ref={barc}></div>
//               </div>
//             </div>
//           </div>
//           <ScrollToTop/>
//           <Switch>
//             <Route path='/' exact>
//               <Home />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/about' exact>
//               <About />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/projects' exact>
//               <Projects />
//             </Route>
//           </Switch>
//           <Switch>
//             <Route path='/contact' exact>
//               <Contact />
//             </Route>
//           </Switch>
//           <div className='cursor-follower' ref={cursor}></div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


// import React,{useEffect,useRef} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import './App.css';
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Contact from './components/Contact/Contact';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import gsap from 'gsap';


// function App() {
//   let cursor = useRef(null);
//   let posX1 = useRef(0);
//   let posY1 = useRef(0);
//   let mouseX1 = useRef(0);
//   let mouseY1 = useRef(0);

//   let tl = gsap.timeline();
//   let tl2 = gsap.timeline();

//   useEffect(() => {
//     let posX = posX1.current;
//     let posY = posY1.current;
//     let mouseX = mouseX1.current;
//     let mouseY = mouseY1.current;
  
//     tl.to({}, 0.016, {
//       repeat: -1,
//       onRepeat: function () {
//         posX += (mouseX - posX) / 10;
//         posY += (mouseY - posY) / 10;
//         tl.set(cursor.current, {
//           css: {
//             left: posX - 50,
//             top: posY - 50,
//           },
//         });
//       },
//     });
  
//     document.addEventListener("mousemove", function (e) {
//       mouseX = e.pageX;
//       mouseY = e.pageY;
//     });
  
//     tl2.from(cursor.current, {
//       // duration: 5,
//       delay: 2,
//       opacity: 0.4
//     }, "-=1");
//   },[tl,tl2,cursor]); // Add cursor as a dependency
  
//   const load = gsap.timeline({
//     paused:"true"
//   })

//   let loader =useRef(null);
//   let percent =useRef(null);
//   let bar = useRef(null);
//   let barc = useRef(null);
//   let progress = useRef(null);

//   useEffect(()=>{
//     load.to([progress , bar],{
//       duration: 0.2 ,
//       opacity: 0 ,
//       zIndex: -1
//     })

//     load.to(progress ,{
//       duration:0.8,
//       width: "0%"
//     })

//     load.to(loader,{
//       visibility:"hidden",
//       zIndex: -1
//     })
//   }, [load])

//   var id;
//   var width1 = 0;
//   function loading(){
//     id = setInterval(frame,20);
//   }
//   function frame(){
//     if(width1 >= 100 ){
//       clearInterval(id);
//       load.play();
//     } else{
//       width1++;
//       if (barc.current && percent.current) {
//         barc.current.style.width = width1 + "%";
//         percent.current.innerHTML = width1 + "%";
//       }
//     }
//   }

//   useEffect(() => {
//     window.addEventListener("load",(e)=>{
//       loading();
//     });
//     return () => {
//       window.removeEventListener("load", () => loading());
//     };
//   });

//   return (
//     <div>
//       <Router>
//         <div className="noise"></div>
//         <div className="App">
//           <div className='loader' ref={loader}>
//             <div className='progress' id='percent' ref={progress}>
//               <div className='percent' ref={percent}>
//                 0%
//               </div>
//               <div className='bar' ref={bar}>
//                 <div className='barc' ref={barc}></div>
//               </div>
//             </div>
//           </div>
//           <ScrollToTop/>
//           <Switch>
//             <Route path='/' exact>
//               <Home />
//             </Route>
//             <Route path='/about' exact>
//               <About />
//             </Route>
//             <Route path='/projects' exact>
//               <Projects />
//             </Route>
//             <Route path='/contact' exact>
//               <Contact />
//             </Route>
//           </Switch>
//           <div className='cursor-follower' ref={cursor}></div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import gsap from 'gsap';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const cursor = useRef(null);
  const posX1 = useRef(0);
  const posY1 = useRef(0);
  const mouseX1 = useRef(0);
  const mouseY1 = useRef(0);

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(() => {
    let posX = posX1.current;
    let posY = posY1.current;
    let mouseX = mouseX1.current;
    let mouseY = mouseY1.current;

    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor.current, {
          css: {
            left: posX - 50,
            top: posY - 50,
          },
        });
      },
    });

    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    });

    tl2.from(cursor.current, {
      delay: 2,
      opacity: 0.4
    }, "-=1");

    // Cleanup function
    return () => {
      tl.kill();
      tl2.kill();
    };
  }, [tl, tl2, cursor]);

  const load = gsap.timeline({
    paused: true
  });

  let loader = useRef(null);
  let percent = useRef(null);
  let bar = useRef(null);
  let barc = useRef(null);
  let progress = useRef(null);

  useEffect(() => {
    load.to([progress, bar], {
      duration: 0.2,
      opacity: 0,
      zIndex: -1
    })

    load.to(progress, {
      duration: 0.8,
      width: "0%"
    })

    load.to(loader, {
      visibility: "hidden",
      zIndex: -1
    })

    // Cleanup function
    return () => {
      load.kill();
    };
  }, [load]);

  let id;
  let width1 = 0;
  function loading() {
    id = setInterval(frame, 20);
  }

  function frame() {
    if (width1 > 100) {
      clearInterval(id);
      load.play();
      setLoadingComplete(true); // Set loadingComplete state to true
    } else {
      width1++;
      if (barc.current && percent.current) {
        barc.current.style.width = width1 + "%";
        percent.current.innerHTML = width1 + "%";
      }
    }
  }

  useEffect(() => {
    window.addEventListener("load", (e) => {
      loading();
    });
    return () => {
      window.removeEventListener("load", () => loading());
    };
  });

  return (
    <div>
      <Router>
        <div className="noise"></div>
        <div className="App">
          {!loadingComplete ? ( // Render loader if loading is not complete
            <div className='loader' ref={loader}>
              <div className='progress' id='percent' ref={progress}>
                <div className='percent' ref={percent}>
                  0%
                </div>
                <div className='bar' ref={bar}>
                  <div className='barc' ref={barc}></div>
                </div>
              </div>
            </div>
          ) : (
            <Switch>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/projects' exact>
                <Projects />
              </Route>
              <Route path='/contact' exact>
                <Contact />
              </Route>
            </Switch>
          )}
          <ScrollToTop />
          <div className='cursor-follower' ref={cursor}></div>
        </div>
      </Router>
    </div>
  );
}

export default App;
