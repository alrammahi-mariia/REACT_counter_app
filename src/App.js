import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const number = 0;

function App() {
  return (
    <div className="App">
      <Header />
      <Main
      // {...number: "0"}
      />
      <Footer />
    </div>
  );
}

export default App;
