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
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ padding: '1rem' }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <Link to="/">
              <img src={logo} alt="MK Decision Reactjs Form" />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}