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
    background: '#000',
    padding: '1rem',
    '@media(max-width: 545px)': {
      padding: '5rem'
    } 
  },
  logo: {
    width: '100px',
    '@media(max-width: 545px)': {
      width: '100%',
      margin: '0 1.8rem'
    },
    '@media(max-width: 345px)': {
      margin: '0'
    }
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
      <AppBar elevation={0} position="static" className={classes.header}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <Link to="/" className={ classes.logoLink }>
              <img className={ `${ classes.logo } fade-in` } src={logo} alt="MK Decision Reactjs Form" />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}