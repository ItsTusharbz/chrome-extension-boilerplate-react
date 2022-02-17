import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { SET_USER } from '../../constants';


const Login = () => {

  const dispatch = useDispatch();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()

  const onSubmit = () => {
    if (username && password) {
      dispatch({ type: SET_USER, payload: username })
      navigate('home', { replace: true });
    }

  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1>Login</h1>
      <input placeholder='username' onChange={(e) => setusername(e.target.value)} style={{ marginBottom: "10px" }} />
      <input placeholder='password' onChange={(e) => setpassword(e.target.value)} type={'password'} style={{ marginBottom: "10px" }} />
      <button onClick={onSubmit}>Save</button>
    </div>

  )
}
export default Login;