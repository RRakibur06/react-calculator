/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
import React from 'react';
import ReactDOM from 'react-dom';
function App (){
  return(
  <div>
      <Buttons />
  </div>
  )
}
function Buttons (){
  var y = 0;
  var dot = false;
  const [m,setm] = React.useState("0");
  function x(e){
    if(m.length==1 && m=="0"){
      return setm(e.target.value);
    }
    else if(e.target.value=="."){
      const splitted = m.split(/[\+\-\*\/]/);
      const last = splitted.slice(-1)[0];
      if(!last.includes('.')) {
          return setm(m + e.target.value);    
      }
      else 
          return setm(m);
    }
    else 
      return setm(m + e.target.value);
  }
  function afterEqual(){
      const splitted = m.split(/[\+\-\*\/]/);
      
      var arr = [], arr2 = [];
      var finalArr = [];
      const spd = m.split(/[0-9]/);
      for(var i=0;i<splitted.length;i++){
        if(splitted[i]!=="")
          arr2.push(splitted[i]);
      }
      for(var i=0;i<spd.length;i++){
        if(spd[i]!="" && spd[i]!="."){
          if(spd[i][spd[i].length-1] !="-"){
            spd[i] = spd[i].slice(-1);
          }
          arr.push(spd[i]);
        }
      }
    for(var i=0;i<arr.length;i++){
      finalArr.push(arr2[i]);
      finalArr.push(arr[i]);
    }
    finalArr.push(splitted[splitted.length-1]);
    
    return setm(eval(finalArr.join("")));
  }
  return( 
    <div>
      <Display z={m}/>
      <button class="btn btn-dark" id="clear" value="ac" onClick={()=>{
          setm("0")}}>AC</button>
      <button class="btn btn-dark" id="zero" value="0" onClick={x}>0</button>
      <button class="btn btn-dark" id="one" value="1" onClick={x}>1</button>
      <button class="btn btn-dark" id="two" value="2" onClick={x}>2</button>
      <button class="btn btn-dark" id="three" value="3" onClick={x}>3</button>
      <button class="btn btn-dark" id="four" value="4" onClick={x}>4</button>
      <button class="btn btn-dark" id="five" value="5" onClick={x}>5</button>
      <button class="btn btn-dark" id="six" value="6" onClick={x}>6</button>
      <button class="btn btn-dark" id="seven" value="7" onClick={x}>7</button>
      <button class="btn btn-dark" id="eight" value="8" onClick={x}>8</button>
      <button class="btn btn-dark" id="nine" value="9" onClick={x}>9</button>
      <button class="btn btn-dark" id="decimal" value="." onClick={x}>.</button>
      <button class="btn btn-dark" id="add" value="+" onClick={x}>+</button>
      <button class="btn btn-dark" id="subtract" value="-" onClick={x}>-</button>
      <button class="btn btn-dark" id="multiply" value="*" onClick={x}>*</button>
      <button class="btn btn-dark" id="divide" value="/" onClick={x}>/</button>
      <button class="btn btn-dark" id="equals" value="=" onClick={afterEqual}>=</button> 
  </div>
  )
}
function Display (props){
  return(
  <div id="display">
      <h5>{props.z}</h5>
  </div>
  )
}

export default App;
