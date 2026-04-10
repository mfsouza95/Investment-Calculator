import { useState } from "react";

import InputBox from "./components/InputBox.jsx";
import Results from "./components/Results.jsx";

function App() {

  const [values, setValues] = useState({
    invest: '10000',
    yinvest: '1200',
    eR: '6',
    yduration: '10',
  });

  function handleValueChange(inputIndentifier, newValue){
      setValues(prevUserInput => {
          return{
              ...prevUserInput,
              [inputIndentifier]: newValue, //Adicionar o "+", pois quando um numero (ou qualquer input) é extraído de um event, ele sempre é tratado como string, independente de qualquer coisa. Com o "+", ele obriga o código a tratar como número
          };
      }); 
  }

  const inputIsValid = values.yduration >=1;

  return (
    <>
      <InputBox onChangeInput={handleValueChange} values={values}/>
      {!inputIsValid && <p className="center">Por favor, selecione um período maior que zero!</p>}
      {inputIsValid && <Results userInput={values}/>}  
    </>
  );
}

export default App
