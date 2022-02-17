
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';


interface LocationState {
  username: string;
}

const Home: React.FC = () => {
  const location = useLocation();
  const { username } = useSelector((state: any) => state.user);
  // const state = location.state as LocationState;
  // console.log(state);
  return (
    <>
      <div>Hello {username}</div>
      <Link to={'/'}>Home</Link>
    </>
  );
};

export default Home;
