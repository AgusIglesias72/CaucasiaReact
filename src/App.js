import './App.css';
import Dog from "./components/Dog"
function App() {

  const dogs = [{name: 'Buddy', age: "5", breed:'Pitbull'},{name: 'Buddy2', age: "10"},{name: 'Buddy3', age: "15"}];

  return (
    <div className="App">
      <h1>Hola Coders</h1>
      <hr/>
      {dogs.map(({name, age}) => (
        <>
          <Dog key={name} age={age} name={name}/>
          <hr/>
        </>
      ))}
    </div>
  )
}

export default App;


