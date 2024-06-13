import Home from "./Screens/Home";
import Services from "./Screens/Services";
import Us from "./Screens/Us";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <Us />
      <Benefits />
      <Contact />
    </div>
  );
}

export default App;
