import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [numbers, setNumbers] = useState(false);
  let [specialCharacters, setSpecialCharacters] = useState(false);
  let [passwordLength, setPasswordLength] = useState(0); 

  function handleCopy() {
    let copyText = document.querySelector('.password');
    if (copyText) {
      navigator.clipboard.writeText(copyText.value)
        .then(() => {
          toast.success('Password copied to clipboard');
        })
        .catch(err => {
          toast.error('Failed to copy password');
        });
    }
  }

  function handleUppercase() {
    setUppercase(!uppercase);
  }
  function handleLowercase() {
    setLowercase(!lowercase);
  }
  function handleNumbers() {
    setNumbers(!numbers);
  }
  function handleSpecialCharacters() {
    setSpecialCharacters(!specialCharacters);
  }
  function handlePasswordLength(e) {
    setPasswordLength(e.target.value);
  }
  const generatePassword = () => {
    let password = '';
    let characters = '';
    if (uppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (lowercase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (numbers) {
      characters += '0123456789';
    }
    if (specialCharacters) {
      characters += '!@#$%^&*()_+';
    }
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.querySelector('.password').value = password;
  }
  return (
    <div className="App">
      <ToastContainer />
      <div className='passwordContainer'>
        <h1>Password Generator</h1>
        <div className='passwordDisplay'>
          <input type='text' className='password' readOnly />
          <button className='copy' onClick={handleCopy}>Copy</button>
        </div>
        <div className='passwordLength'>
          <label htmlFor='password'>Password Length</label>
          <input type='number' onChange={handlePasswordLength} className='length' placeholder="0" />
        </div>
        <div className='lowerCaseLetters'>
          <label htmlFor='lowercase'>Lowercase Letters</label>
          <input type='checkbox' onChange={handleLowercase} className='lowercase' />
        </div>
        <div className='numbersContainer'> 
          <label htmlFor='numbers'>Numbers</label>
          <input type='checkbox' onChange={handleNumbers} className='numbers' />
        </div>
        <div className='specialCharactersContainer'>
          <label htmlFor='specialCharacters'>Special Characters</label>
          <input type='checkbox' onChange={handleSpecialCharacters} className='specialCharacters' />
        </div>
        <div className='capitalLetters'>
          <label htmlFor='Capitals'>Capital Letters</label>
          <input type='checkbox' onChange={handleUppercase} className='Capitals' />
        </div>
        <button className='generate' onClick={generatePassword}>Generate</button>
      </div>
    </div>
  );
}

export default App;