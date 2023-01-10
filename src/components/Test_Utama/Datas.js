import React, { useState } from 'react';
import classes from './Datas.module.css';


// TEST SOAL UTAMA NOMOR 1 DAN 2
const List = (props) => {
  return (
    <div className={classes.cardList}>
      <div>{props.username}</div>
      <div>{props.email}</div>
      <div>{props.nationaly}</div>
    </div>
  )
};

const Datas = () => {
  const [datas, setDatas] = useState([
    {
      username: 'John Doe',
      email: 'jhondoe@test.com',
      nationaly: 'England',
    },
    {
      username: 'Kazuki Ito',
      email: 'kazukiito@test.com',
      nationaly: 'Japan',
    },
    {
      username: 'Leonardo Da Vinci',
      email: 'leonardodavinci@test.com',
      nationaly: 'Italia',
    },
  ]);

  const handleChange = (index) => {
    const newDatas = [...datas]
    newDatas[index].username = 'Leanne Graham'
    newDatas[index].email = 'leannegraham@test.com'
    newDatas[index].nationaly = 'United state of america'
    setDatas(newDatas)
  }

  return (
    <>
      <div className={classes.wrapper}>
          {datas?.map((val, index) => {
            return (
              <button className={classes.btnCard}
                onClick={() => {
                  handleChange(index);
                }}
                key={index}
              >
                <List
                  key={index}
                  username={val.username}
                  email={val.email}
                  nationaly={val.nationaly}
                />
              </button>
            );
          })}
      </div>
    </>
  );
}

export default Datas;
