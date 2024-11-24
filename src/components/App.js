import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [num1, setNum1] = useState(0);
  let [sum, setSum] = useState(0);
     
  function handleChange(e) {
        let value = e.target.value;
        setNum1(value);

        setSum(sum + +value);
  }




  return (
    <div>
        <h1>Sum Calculator</h1>
        <form>
             <input type="number" name="num1" placeholder="Enter first number" 
               onChange={handleChange}
             />
        </form>
           <p>Sum: {sum}</p>
    </div>
  )
}

export default App