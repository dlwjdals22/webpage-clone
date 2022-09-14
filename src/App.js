import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./Main";
import Main2 from "./Main2";

function App() {
  // 원본 페이지 주소
  // https://workat.tech/frontend-development/practice/chessboard-showing-bishop-moves-21fq78tswbst
  console.log(
    "https://workat.tech/frontend-development/practice/chessboard-showing-bishop-moves-21fq78tswbst"
  );
  return (
    <div className="App">
      <Nav />
      <Main />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;
