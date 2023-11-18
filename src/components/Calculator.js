import React,{useState} from "react";


const Calculator=()=>{
    const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const validateInput = () => {
    if (num1 === '' || num2 === '') {
      setErrorMessage('Please enter both numbers.');
      return false;
    }

    if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setErrorMessage('Please enter valid numbers.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const performOperation = (operation) => {
    setErrorMessage('');
    setResult(null);
    if (validateInput()) {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);

      switch (operation) {
        case 'add':
          setResult(number1 + number2);
          break;
        case 'subtract':
          setResult(number1 - number2);
          break;
        case 'multiply':
          setResult(number1 * number2);
          break;
        case 'divide':
          if (number2 === 0) {
            setErrorMessage('Cannot divide by zero.');
          } else {
            setResult(number1 / number2);
          }
          break;
        default:
          setErrorMessage('Invalid operation.');
      }
    }
  };


    return(
    <div className="container">
        <div className="blue-box">
        <div className="box">
            <h1>React Calculator</h1>
            <input type="text" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Num 1" />
            <input type="text" value={num2}
        onChange={(e) => setNum2(e.target.value)} placeholder="Num 2" />
            <div className="btn-container">
                <button onClick={() => performOperation('add')}>+</button>
                <button  onClick={() => performOperation('subtract')}>-</button>
                <button onClick={() => performOperation('multiply')}>*</button>
                <button  onClick={() => performOperation('divide')}>/</button>
            </div>
            {result !== null && (
               <>
               <div style={{textAlign:'center'}}>
               <p style={{ color: 'green' }}>Success!</p>
               <p>Result: {result}</p>
               </div>
            </>
            )}
            {errorMessage !== '' && (
                <>
                <div style={{textAlign:'center'}}>
                  <p style={{ color: 'red' }}>Error!</p>
                  <p>{errorMessage}</p>
                </div>
                 </>
            )}
        </div>
        </div>
    </div>
    )
}
export default Calculator;