import './App.css';
import { useState } from 'react';

function App() {
  const [calC,setCalC] = useState("")
  const [result, setResult] = useState("")
  
  const ops = ['/','*','+','-','.']
  const del = ()=>{
    setCalC("")
    setResult("")
  }
  const updateCalc = value =>{
    if(
      (ops.includes(value) &&  calC === "")  || 
      (ops.includes(value) && ops.includes(calC.slice(-1)))
      ){
        return 
      }
    
    setCalC(calC+value)

    if(!ops.includes(value)){
      setResult(eval(calC+value).toString())
    }
  }

  const createDigits = () => {
      const digits = [];
      for (let i = 1; i <10 ; i++){
        digits.push(
          <button 
          key={i} 
          onClick={()=>updateCalc(i.toString())} >
            {i}
          </button>
        )
      }
      return digits
  }
  const calculate = () =>{
    setCalC(eval(calC).toString())
    setResult("")
  }
    return(
      <div className='App'>
        <div className='calc'>

          <div className='display'>
            { result ? <span>{ result }</span> : "" } 
            { calC || "0" }
          </div>

          <div className='operators'>
            <button onClick={()=>updateCalc("+")}>+</button>
            <button onClick={()=>updateCalc("-")}>-</button>
            <button onClick={()=>updateCalc("/")}>/</button>
            <button onClick={()=>updateCalc("*")}>*</button>

            <button onClick={()=>del()}>DEL</button>
          </div>
          
          <div className='digits'>
            { createDigits() }
            <button onClick={()=>updateCalc('0')}>0</button>
            <button onClick={()=>updateCalc('.')}>.</button>
            <button onClick={()=>calculate()}>=</button>
          </div>
        </div>
      </div>
    )
}

export default App;
