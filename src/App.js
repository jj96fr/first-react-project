import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonComponent text="Federico" />
      <ImageComponent src="https://cdn.pixabay.com/photo/2023/03/19/09/20/animals-7862112_960_720.jpg" />
    </div>
  );
}

export default App;
