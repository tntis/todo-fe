import React from 'react';
import './index.css';
import App from './App';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box, Typography} from '@mui/material'; //추가

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
					{/* 추가 */}
          <Box mt={5}>
            <Copyright />
          </Box>
        </BrowserRouter>
      </div>
    )
  }
}

//추가
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright © Java Jocture Study, {new Date().getFullYear()}.
    </Typography>
  )
}

export default AppRouter;