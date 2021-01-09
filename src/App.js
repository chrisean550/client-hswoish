import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Home from "./components/views/Home";
import Portfolio from "./components/views/Portfolio";
import {BrowserRouter, Route} from "react-router-dom"

function App() {
  return (
    <>
    <div>TEST</div>
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
    </BrowserRouter>
  </>
  );
}

export default App;
