import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Layout = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/table">Table</Link></li>
          <li><Link to="/charts">Charts</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/kanban">Kanban</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
