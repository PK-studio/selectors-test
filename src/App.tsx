import { useDispatch } from 'react-redux';
import './App.css';

export const App = () => {
  const dispatch = useDispatch()
  const click = (type: String) => dispatch({type})
  

  return (
    <div className="App">
      <header className="App-header">
        <h5>Selector test</h5>
        <button onClick={() => click('increment')}>Increment</button>
        <button onClick={() => click('decrement') }>Decrement</button>
      </header>
    </div>
  );
}
