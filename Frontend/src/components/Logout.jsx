// import React from 'react';
// import IconButton from '@mui/material/IconButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//     const navigate = useNavigate();
//   const handleLogout =  async () => {
//     localStorage.clear();
//      navigate('/login');
//     console.log('Logging out...');
//   };

//   return (
//     <IconButton onClick={handleLogout} style={{ color: 'white' }}>
//       <LogoutIcon style={{ color: 'inherit' }} />
//     </IconButton>
//   );
// };

// export default Logout;

import React from 'react';
import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

// Styled components
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: rgb(255, 65, 65);

  &:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;
  }

  &:hover .sign {
    width: 30%;
    transition-duration: .3s;
    padding-left: 20px;
  }

  &:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: .3s;
    padding-right: 10px;
  }

  &:active {
    transform: translate(2px, 2px);
  }
`;

const Sign = styled.div`
  width: 100%;
  transition-duration: .3s;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 17px;

    path {
      fill: white;
    }
  }
`;

const Text = styled.div`
  position: absolute;
  right: 0%;
  width: 0%;
  opacity: 0;
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  transition-duration: .3s;
`;

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.clear();
    navigate('/login');
    console.log('Logging out...');
  };

  return (
    <Button onClick={handleLogout}>
      <Sign>
        <LogoutIcon />
      </Sign>
      <Text>Logout</Text>
    </Button>
  );
};

export default Logout;
