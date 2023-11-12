import logo from './logo.svg';
import './App.css';
import Compo from './Compo';
import AbcComp from './AbcComp';
import Messanger from './Messanger';
import ClassCompo from './ClassCompo';


function App() {
  return (

     <div className='App'>
      <h1>MY fisrt react App</h1>
      <AbcComp/>
      <AbcComp/>
      <Compo/>
      <Messanger/>
      <ClassCompo/>
     </div>
  
  );
}

export default App;
