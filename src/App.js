import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <h2>Jewelers of Parkland</h2>
      <div>
        {/* <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/DFm7cV00AQbwlUrXctnN4Q/o.jpg"
          alt=""
        /> */}
      </div>

      <h2 className="topic">About</h2>
      <p className="about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptates facere dicta, ipsa itaque ipsam nulla. Nostrum non iste qui,
        provident explicabo ullam asperiores. Modi, consectetur. Odio sunt quo
        ducimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptates facere dicta, ipsa itaque ipsam nulla. Nostrum non iste qui,
        provident explicabo ullam asperiores. Modi, consectetur. Odio sunt quo
        ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptates facere dicta, ipsa itaque ipsam nulla. Nostrum non iste qui,
        provident explicabo ullam asperiores. Modi, consectetur. Odio sunt quo
        ducimus.
      </p>

      {/* <div className="parallax">
        <img
          src="https://img1.wsimg.com/isteam/ip/0f1a5fc8-9d15-4863-bdb5-2e854ed4eb46/P1040251-0001.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800"
          alt=""
        />
      </div> */}
      <h2 className="topic">Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        voluptates facere dicta, ipsa itaque ipsam nulla. Nostrum non iste qui,
        provident explicabo ullam asperiores. Modi, consectetur. Odio sunt quo
        ducimus.
      </p>
      {/* <div className="parallax">
        <img
          src="https://img1.wsimg.com/isteam/ip/0f1a5fc8-9d15-4863-bdb5-2e854ed4eb46/P1040273.jpg/:/rs=w:1300,h:800"
          alt=""
        />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
