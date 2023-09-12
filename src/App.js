import logo from './logo.svg';
import './App.css';

function App() {
const name = 'the thing, yes!';
const isTheThing = false;

  return (
    <div className="App">
      <h1>Hello, {isTheThing ? name : 'The thing, no!'} </h1>
    </div>
  );
}

export default App;
