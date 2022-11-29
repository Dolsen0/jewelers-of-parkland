import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="mainView">
        <div>Hello</div>
        <div>Hello</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
