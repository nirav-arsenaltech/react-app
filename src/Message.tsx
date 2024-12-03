import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

// Example 1: Basic JSX and Conditional Rendering
function Message() {
  const name = 'Nirav'; // Static name for this example
  if (name) {
    return <h1 className="text-center text-primary">Hello {name}!</h1>;
  }
  return <h1 className="text-center text-secondary">Hello React!</h1>;
}

// Example 2: Button with State (useState)
function Button() {
  const [count, setCount] = useState(0); // State to keep track of the button click count

  // Event handler to increment the count
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="text-center">
      <p className="lead">Button clicked {count} times</p>
      <button className="btn btn-success" onClick={incrementCount}>
        Click me
      </button>
    </div>
  );
}

// Example 3: List Rendering (Rendering a List of Items)
function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  return (
    <div className="mt-4">
      <h2>Fruits List</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

// Example 4: useEffect Hook (Simulating Component Did Mount)
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up a timer when the component mounts
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return <p className="mt-3">Time elapsed: {seconds} seconds</p>;
}

// Example 5: Controlled Form Input
function ControlledForm() {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Form Submitted with value: ${input}`);
  };

  return (
    <div className="mt-4">
      <h2>Controlled Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userInput" className="form-label">Enter Something:</label>
          <input
            type="text"
            id="userInput"
            className="form-control"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

// Example 6: Toggle Button (Light / Dark Mode)
function ToggleMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="mt-4">
      <button
        className={`btn ${isDarkMode ? 'btn-dark' : 'btn-light'}`}
        onClick={toggleMode}
      >
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

// Example 7: Dynamic Styles with State
function DynamicStyleExample() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="mt-4">
      <p style={{ color: isRed ? 'red' : 'blue' }}>
        The color of this text is {isRed ? 'red' : 'blue'}.
      </p>
      <button className="btn btn-warning" onClick={toggleColor}>
        Toggle Text Color
      </button>
    </div>
  );
}

// Example 8: Card UI Example
function CardExample() {
  return (
    <div className="card mt-4" style={{ width: '18rem' }}>
      <img
        src="https://via.placeholder.com/150"
        className="card-img-top"
        alt="Placeholder"
      />
      <div className="card-body">
        <h5 className="card-title">Example Card</h5>
        <p className="card-text">This is a simple Bootstrap card with an image.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

// Main App Component that includes all examples
function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Welcome to React Examples!</h1>

      <Message />
      <Button />
      <ItemList />
      <Timer />
      <ControlledForm />
      <ToggleMode />
      <DynamicStyleExample />
      <CardExample />
    </div>
  );
}

// Rendering the App Component to the root
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
