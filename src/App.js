import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import Fragments from './components/Fragments';
import NewTable from './components/NewTable';

import PureComp from './components/PureComp';
import Parentcomp from './components/Parentcomp';
import PortalDemo from './components/portals/PortalDemo';
import HookCounter from './components/hooks/HookCounter';
import HookCounter2 from './components/hooks/HookCounter2';
import HookCounter3 from './components/hooks/Hookcounter3';
import CounterHook1 from './components/hooks/useeffect/CounterHook1';
import ClassCounter1 from './components/hooks/useeffect/ClassCounter1';


function App() {
  return (
    <div className="App">
    
      
      <PortalDemo/>
      <ClassCounter1/>
      <CounterHook1/>
    
      
      
      
    </div>
  );
}
export default App