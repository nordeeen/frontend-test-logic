import React, { useState } from 'react';


// SOAL NOMOR 3 PSUDOCODE
const Starts = () => {
  const [val, setVal] = useState('')
  const [show, setShow] = useState(false)
  const [starArr, setStarArr] = useState([])
  const star = '*'

  const handleInput = (e) => {
    setVal(e.target.value)
  };

  const handleStar = (e) => {
    e.preventDefault()
    let arr = []
    for (let i = 1; i <= val; i++) {
      let temp = star.repeat(i)
      arr.push(temp)
    }
    setStarArr(arr);
    setShow(true);
  };

  const resetHandler = () => {
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
          }}>
          <label>Masukan Angka</label>
          <input type="number" onChange={handleInput} />
          <button onClick={handleStar}>Show Value</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '15px'}}>
        {show &&
          starArr.map((item) => {
            return (
              <div key={item}>
                <h2>{item}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Starts;
