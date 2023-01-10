import React, { useState } from 'react'

// Soal Nomor 2 PsudoCode
const Fibonacci = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const fibon = (num) => {
    if (num < 2) {
      return num
    } else {
      return fibon(num - 1) + fibon(num - 2)
    }
  }

  const changeHandler = (e) => {
    setData(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (data <= 0) {
      console.log('Enter a positive integer.')
    } else {
      let arr = []
      for (let i = 0; i < data; i++) {
        let newData = fibon(i)
        arr.push(newData)
      }
      setData(arr)
    }
    setShow(true)
  };

  const resetHandler = () => {
    setData(null);
    setShow(false);
  }

  return (
    <>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '18px',
            wordSpacing: '10px',
          }}>
          <label>Masukan Angka :</label>
          <input type="number" value={data} onChange={changeHandler} />
          <button onClick={handleClick} style={{marginRight: '10px'}}>show value</button>
          <button onClick={resetHandler}>reset</button>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '20px'}}>
          {show && data.map((item, index) => <p key={index}>{item}</p>)}
        </div>
      </div>
    </>
  );
}

export default Fibonacci;
