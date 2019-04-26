import React,{ Component} from 'react';
import Characterlist from './characterlist';
import '../styles/index.css';
import Heroes from './heros';
import Supersquad from './squadstates';
class App extends Component{
    render(){
       return (
           <div className="App ">
               <h2>Supersquad</h2>
               <div className="row">
               <div className="col-4">
                   <Characterlist />
                </div>
                <div className="col-4">
                   <Heroes />
                 </div>
                 <div className="col-4">
                     <Supersquad />
                 </div>
                 </div>
           </div>
       );
    }
}

export default App;