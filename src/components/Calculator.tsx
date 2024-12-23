import React, { useState, useEffect } from 'react';

export function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    setInput(prevInput => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event;

    if (key >= '0' && key <= '9') {
      handleClick(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      handleClick(key);
    } else if (key === 'Enter') {
      handleEvaluate();
    } else if (key === 'Backspace' || key === 'c' || key === 'C') {
      handleClear();
    }
  };

  useEffect(() => {
    const handle = (event: KeyboardEvent) => handleKeyDown(event);

    window.addEventListener('keydown', handle);

    return () => {
      window.removeEventListener('keydown', handle);
    };
  }, []);

  return (
    <div className="calculator-popup">
      <div className="calculator-container">
        <div className="display">
          <input type="text" value={input} disabled />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}
