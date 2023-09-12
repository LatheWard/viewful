import logo from './logo.svg';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.fname}</h1>
      <h2>Last name: {props.lname}</h2>
      <h3>Age: {props.age}</h3>
    </>
    
  )
}

const App = () => {
  return (
    <div className="App">
      <Person fname={'John'} lname={'Appleseed'} age={30} />
      <Person fname={'Mike'} lname={'Mentzer'} age={25} />
      <Person fname={'Tom'} lname={'Platz'} age={33} />
    </div>
  );
}

export default App;
