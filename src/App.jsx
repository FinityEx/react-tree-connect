import './App.css';
import { useRef, useState } from 'react';
import Circle from './components/examples/Circle';
import Tree from './components/Tree/Tree';

export function App() {
  const containerRef = useRef(null);
  const [elements, setElements] = useState([]);

  const addCircle = (e, parentIndex = null) => {
    setElements((prevState) => [
      ...prevState,
      <Circle
        key={prevState.length + 1}
        treeId={prevState.length + 1}
        connectId={parentIndex}
        containerRef={containerRef}
        onClick={addCircle}
      />
    ]);
  };

  return (
    <div className="container">
      <button className="btn" onClick={addCircle}>
        Add Circle
      </button>
      <div className="containerCircle" ref={containerRef} onContextMenu={(e) => e.preventDefault()}>
        <Tree containerRef={containerRef}>{elements}</Tree>
      </div>
    </div>
  );
}
