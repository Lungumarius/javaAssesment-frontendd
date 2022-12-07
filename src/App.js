import logo from './logo.svg';
import './App.css';
import {Typography} from '@material-ui/core';
import { FormComponent } from './components/FormComponent';
import ViewAllComponent from './components/ViewAllComponent';


function App() {
  return (
    <div className="App">
      <FormComponent></FormComponent>
      <ViewAllComponent></ViewAllComponent>
    </div>
  );
}

export default App;
