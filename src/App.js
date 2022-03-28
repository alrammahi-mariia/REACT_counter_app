import "./App.css";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

const number = 0;

function App() {
  return (
    <div className="App">
      <Header />
      <Counter
      // {...number: "0"}
      />
      <Footer />
    </div>
  );
}

export default App;
