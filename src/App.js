import './App.css';
import Boop from './Boop/Boop';
import {useBoop} from './hooks/use-boop';
import {animated} from 'react-spring';

function App() {

  const [style, trigger] = useBoop({x: 3, rotation: 10, scale: 0.9})

  return (
    <div className="App">
      <header className="App-header">
        <animated.button onMouseEnter={trigger} style={style} className="button">Click me</animated.button>
      </header>
    </div>
  );
}

export default App;
