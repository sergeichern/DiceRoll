import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';
import './App.css'
function App() {

  const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];

  const [image, setNewImage] = useState(diceIcons[0]);
  const [image2, setNewImage2] = useState(diceIcons[1]);

  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    
    setRolling(true);
    setTimeout(() => {
      const randomNum1 = Math.floor(Math.random() * 6);
      const randomNum2 = Math.floor(Math.random() * 6);
      setNewImage(diceIcons[randomNum1]);
      setNewImage2(diceIcons[randomNum2]);
      setRolling(false);
    }, 600); 
  };

  return (
    <div className='App'>

      <h1>Dice Roller</h1>

      <div className='dice-container'>
        <div className='square'><FontAwesomeIcon
          icon={image}
          className={`dice-icon ${rolling ? 'rolling' : ''}`}
        />


        </div>
        <div className='square'><FontAwesomeIcon
          icon={image2}
          className={`dice-icon ${rolling ? 'rolling' : ''}`}
        />


        </div>
      </div>
      <div className='roll-button'>
        <button type="button" className="btn btn-outline-warning" onClick={rollDice} >Roll</button>
      </div>
    </div>
  )
}

export default App
