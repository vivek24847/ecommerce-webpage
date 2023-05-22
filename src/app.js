import "./App.css";
import Extra from "./Components/Extra";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Product from "./Components/Product"

function App() {
  return (
    <div className="App">
      <Header />

      <Extra />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
