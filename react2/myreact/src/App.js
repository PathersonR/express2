import logo from './logo.svg';
import './App.css';
import React, {useRef, useState, useEffect} from 'react';
import ColorTable from './ColorTable'

function App() {
  const [colors, setColors] = useState([])   // const colors = [];
  const colorRef = useRef();

  useEffect( () => {
    console.log("colors=" + JSON.stringify(colors))
  })
  function handleClick() {
    var color = colorRef.current.value;

    setColors( [ ...colors ,{'color': color} ])
  }
  return (
    <div className="App">
      <div>Color <input type="text" ref={colorRef} />
      <button onClick={handleClick}>Click Me</button></div>
      <div><ColorTable colors={colors} /></div>
    </div> 
  );
}

export default App;




