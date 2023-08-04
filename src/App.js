
import './App.css';
import ClickIncrease from './HOC/ClickIncrease';
import HoverIncrease from './HOC/HoverIncrease';
import PureComponent from './PureComponent/pureComponent';

function App() {
  return (
    <div className="App">
      <PureComponent/>
     <ClickIncrease/>
     <HoverIncrease/>
    
    </div>
  );
}

export default App;
