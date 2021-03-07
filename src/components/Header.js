import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logoBlack.svg';

import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: '#000'
  },
  logo: {
    width: '100px'
  },
  logoLink: {
    display: 'flex',
    alignItems: 'center'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" style={{ padding: '1rem' }} className={classes.header}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <Link to="/" className={ classes.logoLink }>
              <img className={ classes.logo } src={logo} alt="MK Decision Reactjs Form" />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}