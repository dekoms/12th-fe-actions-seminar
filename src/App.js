import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>멋쟁이사자처럼 영남대학교 12기 운영진 이재훈</p>
        <a
          className="App-link"
          href="https://jinlee.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          블로그 구경하기
        </a>
      </header>
    </div>
  );
}

export default App;
