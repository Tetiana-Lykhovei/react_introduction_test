import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import db from "./db/db.json";
console.log(db);

function App() {
  return (
    <div className="App">
      <Header />
      <Main data={db} />
      <Footer />
    </div>
  );
}

export default App;
