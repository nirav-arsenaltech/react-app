import { useState } from 'react';
import './App.css';
import { Button, Timer, ControlledForm, ToggleMode, DynamicStyleExample, CardExample, DragAndDropExample, TicTacToe } from './Message';
import { Message } from './components/Message';
import { ItemList } from './components/ItemList';
import { Calculator } from './components/Calculator';

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const toggleCalculator = () => {
    setShowCalculator(!showCalculator);
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center text-blue-500">Welcome to React Examples!</h1>

      <Message name="nirav" />
      <Button />
      <ItemList />
      <Timer />
      <ControlledForm />
      <ToggleMode />
      <DynamicStyleExample />
      <CardExample />
      <DragAndDropExample />
      <TicTacToe />

      <button className="btn btn-primary mt-4" onClick={toggleCalculator}>Open Calculator</button>
      {showCalculator && (
        <div className="popup-overlay">
          <div className="popup-container">
            <Calculator />
            <button className="btn btn-danger" onClick={toggleCalculator}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Nirav React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
