import React, { useState } from 'react';
import styles from '../Test_PsudoCode/DeretAngka.module.css';

// Soal Nomor 1 PsudoCode
const DeretAngka = () => {
  const [test, setTest] = useState('')
  const [title, setTItle] = useState('')
  const [show, setShow] = useState(false)
  const regex = /^[0-9\b]+$/;

  const handleShowValue = (e) => {
    if (parseInt(title) <= 60) {
      setTest('KURANG')
    } else if (parseInt(title) > 60 && parseInt(title) <= 70) {
      setTest('CUKUP')
    } else if (parseInt(title) > 70 && parseInt(title) <= 80) {
      setTest('BAIK')
    } else if (parseInt(title) > 80) {
      setTest('LUARBIASA')
    } else {
      setTest('UNKWON')
    }
    e.preventDefault()
    setShow(true)
  }

  const resetHandler = () => {
    setTItle('')
    setShow(false);
  };

  const inputChangeHandler = (e) => {
    if (e.target.value === '' || regex.test(e.target.value)) {
      if (title !== e.target.value) {
        setShow(false)
      }
      setTItle(e.target.value)
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'steelblue',
      }}>
      <form className={styles.boxInput}>
        <h3>{show && test}</h3>
        <div>
          <input
            type="text"
            value={title}
            onChange={inputChangeHandler}
            placeholder="please input number"
            required
            style={{
              width: '250px',
              height: '40px',
              borderRadius: '10px',
              padding: '10px',
              outline: 'none',
            }}
          />
        </div>
        <button type="button" onClick={handleShowValue} style={{marginTop: '50px', padding: '10px', borderRadius: '3px'}}>
          Show Value
        </button>
        <button type="button" onClick={resetHandler} style={{marginTop: '50px', padding: '10px', borderRadius: '3px'}}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default DeretAngka;
