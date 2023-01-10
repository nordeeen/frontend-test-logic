import React, { useState, useEffect } from 'react'
import classes from './UserLogin.module.css'

// TEST SOAL UTAMA NOMOR 9
const UserLogin = () => {
  const [show, setShow] = useState(false)
  const [hide, setHide] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleName = (e) => {
    setUsername(e.target.value)
  }
  const handlePass = (e) => {
    setPassword(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username))
    localStorage.setItem('password', JSON.stringify(password))
  }, [username, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    setShow(true)
    setHide(false)
  }

  const handleOut = () => {
    localStorage.clear()
    setUsername('')
    setPassword('')
    setShow(false)
    setHide(true)
  }

  return (
    <>
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.title}>
            {show && <h2>Selamat Datang {username}</h2>}
          </div>
          <div className={`${classes.inputContainer} ${classes.ic1}`}>
            {hide && (
              <input
                className={classes.input}
                type="text"
                placeholder=" "
                name="username"
                aria-label="Username field"
                value={username || ''}
                onChange={handleName}
                required
              />
            )}
            <div className={classes.cut}></div>
            {hide && (
              <label htmlFor="firstname" className={classes.placeholder}>
                username
              </label>
            )}
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            {hide && (
              <input
                className={classes.input}
                type="password"
                placeholder=" "
                name="password"
                aria-label="Password field"
                value={password || ''}
                onChange={handlePass}
                required
              />
            )}
            <div className={classes.cut}></div>
            {hide && <label className={classes.placeholder}>password</label>}
          </div>
          <div className={`${classes.inputContainer} ${classes.ic2}`}>
            <div className={`${classes.cut} ${classes.cutShort}`}></div>
          </div>
          {hide && (
            <button type="submit" className={classes.submit}>
              log in
            </button>
          )}
          {show && (
            <button onClick={handleOut} type="text" className={classes.submit}>
              log out
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default UserLogin
