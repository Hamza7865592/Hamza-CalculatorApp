import React from 'react';
import './App.css';
import { useState } from 'react';

const App=()=>{
  const [result, setValue]=useState('');

  const clickHandler=(event)=>{
    setValue(result.concat(event.target.name))
  }

  const clear = () =>{
    setValue("");
  }

  const backspace = () =>{
    setValue(result.slice(0, result.length - 1));
  }
  const calculate = () =>{
    try{
    setValue(eval(result).toString());
    } catch(err){
      setValue("Error")
    }
    
  }
  return(
    <>
    <div className='container'>
      <div className='calculator'>
        <form action=''>
          <div className='display'>
            <input type='text' value={result}/>
          </div>
          <div className='buttons'>
            <input type='button' name="AC" value="AC" onClick={clear}/>
            <input type='button' name="DEL" value="DEL" onClick={backspace}/>
            <input type='button' name="." value="." onClick={clickHandler}/>
            <input type='button' name="/" value="/" onClick={clickHandler}/>
          </div>
          <div>
            <input type='button' name="7" value="7" onClick={clickHandler}/>
            <input type='button' name="8" value="8" onClick={clickHandler}/>
            <input type='button' name="9" value="9" onClick={clickHandler}/>
            <input type='button' name="*" value="*" onClick={clickHandler}/>
          </div>
          <div>
            <input type='button' name="4" value="4" onClick={clickHandler}/>
            <input type='button' name="5" value="5" onClick={clickHandler}/>
            <input type='button' name="6" value="6" onClick={clickHandler}/>
            <input type='button' name="+" value="+" onClick={clickHandler}/>
          </div>
          <div>
            <input type='button' name="1" value="1" onClick={clickHandler}/>
            <input type='button' name="2" value="2" onClick={clickHandler}/>
            <input type='button' name="3" value="3" onClick={clickHandler}/>
            <input type='button' name="-" value="-" onClick={clickHandler}/>
          </div>
          <div>
            <input type='button' name="00" value="00" onClick={clickHandler}/>
            <input type='button' name="0" value="0" onClick={clickHandler}/>
            <input type='button' name="=" value="=" onClick={calculate} id='equal'/>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App;