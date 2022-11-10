import React ,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greeting from './component/greet'
import Welcome from './component/welcome'
import Hello from './component/hello'
import Nojsx from './component/nojsx';


class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <Greeting/>
      <Welcome/> */}
      {/* <Hello/> */}
      <Nojsx />
    </div>
  );
}
}

export default App;
