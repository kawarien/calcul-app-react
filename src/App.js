import logo from './logo.svg';
import './App.css';


// importer le store et les actions

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  // Hooks de Redux
  const { numbers, number1, number2, result, message } = useSelector(state => state); // lire le store
  const dispatch = useDispatch(); // lancer une action dans le reducer Redux

  const handleChange = e => {
    const { name, value } = e.target;

    dispatch({ type: "SET_NUMBER", name, value });
  }

  return (
    <div className="App">
      { numbers.length > 0 && (
        <ul>
          { numbers.map((number, i) => <li key={i}>{number}</li>)}
        </ul>
      )}
      <button onClick={() => dispatch({ type: "SHUFFLE" })} >Afficher les nombres</button>
      {/** affichez simplement les nombres du store ul li */}

      <div>
        {/** onChange se fait maintenant dans le reducer algo  */}
       Number 1 :
       <input type="text" name="number1" onChange={handleChange} value={number1} />
        {number1}
      </div>
      <div>
        {/** onChange se fait maintenant dans le reducer algo  */}
       Number 2 :
       <input type="text" name="number2" onChange={handleChange} value={number2} />
        {number2}
      </div>
      <p>{message}</p>

      <div>
        <button onClick={() => dispatch({type: "ADD" })}>ADD</button>
      </div>
      <div>
        <button onClick={() => dispatch({type: "MULTIPLICATION" })}> Multiplication</button>
      </div>
      <div>
        <button onClick={() => dispatch({type: "RESET" })}>Reset</button>
      </div>
      { result && (
        <p>{result}</p>
      )}
    </div>
  );
}

export default App;