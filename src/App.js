import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <h2>Lorem Ipsum</h2>
      <div className="mainView">


          <div>upcoming photo </div>
          <div> upcoming photo</div>
        </div>
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          voluptates facere dicta, ipsa itaque ipsam nulla. Nostrum non iste
          qui, provident explicabo ullam asperiores. Modi, consectetur. Odio
          sunt quo ducimus.
        </p>

      <Footer />
    </div>
  );
}

export default App;
