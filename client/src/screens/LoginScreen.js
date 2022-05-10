import React, { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    backendAPI(email, password);
  };

  const backendAPI = (email, password) => {
    const database = [
      { email: 'yunni@gmail.com', password: '1234' },
      { email: 'hank.dowhan@gmail.com', password: 'test123' },
      { email: '123han@gmail.com', password: 'test123' },
      { email: '123dowhan@gmail.com', password: 'test123' },
      { email: 'han123owhan@gmail.com', password: 'test123' },
      { email: 'h124dowhan@gmail.com', password: 'test123' },
      { email: 'han13an@gmail.com', password: 'test123' },
      { email: 'han123owhan@gmail.com', password: 'test123' },
    ];

    const userData = database.find((user) => user.email === email);

    if (userData) {
      if (userData.password === password) {
        setMessage(`환영합니다 ${email}님!`);
      } else {
        setMessage('유저 정보를 확인하세요.');
      }
    } else {
      setMessage('유저 이메일이 존재하지 않습니다.');
    }
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <div>{message}</div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type='text'
            name='email'
            required
          />
        </div>
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type='password'
          name='password'
          required
        />
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;
