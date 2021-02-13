import './App.css';
import Counter from './components/Counter';
import CounterDisplay from './components/CounterDisplay';

function App() {
  return (
    <div className="App">
      <h2>Redux with Redux-Toolkit</h2>
      <Counter />
      <CounterDisplay />
    </div>
  );
}

export default App;
