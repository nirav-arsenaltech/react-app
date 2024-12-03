import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Example 1: Basic JSX and Conditional Rendering
export function Message() {
  const name = 'Nirav'; // Static name for this example
  if (name) {
    return <h1 className="text-center text-primary">Hello {name}!</h1>;
  }
  return <h1 className="text-center text-secondary">Hello React!</h1>;
}

// Example 2: Button with State (useState)
export function Button() {
  const [count, setCount] = useState(0); // State to keep track of the button click count

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
export function ItemList() {
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
export function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className="mt-3">Time elapsed: {seconds} seconds</p>;
}

// Example 5: Controlled Form Input
export function ControlledForm() {
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
export function ToggleMode() {
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
export function DynamicStyleExample() {
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
export function CardExample() {
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

type Item = {
    id: number;
    name: string;
    color: string;
  };

  
export function DragAndDropExample() {
    const colors = ['#FFDDC1', '#FFABAB', '#FFC3A0', '#D5AAFF', '#85E3FF', '#B9FBC0'];
  
    const initialItems: Item[] = [
      { id: 1, name: 'Item 1', color: colors[0] },
      { id: 2, name: 'Item 2', color: colors[1] },
      { id: 3, name: 'Item 3', color: colors[2] },
      { id: 4, name: 'Item 4', color: colors[3] },
    ];
  
    const [items, setItems] = useState(initialItems);
    const [draggedItem, setDraggedItem] = useState<Item | null>(null);
  
    const onDragStart = (item: Item) => {
      setDraggedItem(item);
    };
  
    const onDrop = (targetId: number) => {
      if (!draggedItem) return;
  
      const updatedItems = items.filter((item) => item.id !== draggedItem.id);
      const targetIndex = updatedItems.findIndex((item) => item.id === targetId);
  
      updatedItems.splice(targetIndex + 1, 0, draggedItem);
      setItems(updatedItems);
      setDraggedItem(null);
    };
  
    return (
      <div className="mt-4">
        <h2 className="text-center">Drag and Drop Example </h2>
        <ul className="list-group">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item"
              draggable
              onDragStart={() => onDragStart(item)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => onDrop(item.id)}
              style={{
                cursor: 'grab',
                userSelect: 'none',
                backgroundColor: item.color,
                color: '#333',
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  